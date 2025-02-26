// SPDX-License-Identifier: LGPL-3.0-only
// Created By: Art Blocks Inc.

import {Base64} from "@openzeppelin-5.0/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin-5.0/contracts/utils/Strings.sol";

pragma solidity ^0.8.22;

/**
 * @title Art Blocks Json Library
 * @author Art Blocks Inc.
 * @notice UNAUDITED
 * A library for helping write static JSON metadata for Art Blocks projects.
 * The library writes JSON data to a string within solidity, while remaining O(n) in gas and memory complexity,
 * where n is the number of elements in an array or key:value pairs in an object. The library is O(m^2)
 * in gas and memory complexity, where m is the depth of nested objects or arrays.
 * When used in memory, the library only supports arrays and objects of fixed, pre-allocated size,
 * in order to avoid dynamic memory allocation.
 * The library supports an optional flag to write input string values as base64 encoded strings, in
 * order to avoid the need for escaping characters in JSON strings.
 * Keys are assumed to be valid key names in JSON.
 * The library supports writing JSON objects, arrays, strings, uints, booleans, and null values.
 * The library does not support writing floating point numbers.
 */
library JsonStatic {
    using Strings for uint256;
    using JsonStatic for JsonStatic.Json;

    enum JsonType {
        OBJECT,
        ARRAY,
        ELEMENT_STRING,
        ELEMENT_UINT,
        ELEMENT_BOOLEAN,
        ELEMENT_NULL
    }

    enum StringEncodingFlag {
        NONE,
        BASE64
    }

    struct Json {
        JsonType jsonType;
        string[] objectKeys; // array of keys if type is OBJECT
        Json[] values; // array of values if type is OBJECT, or array values if type is ARRAY
        StringEncodingFlag stringEncodingFlag;
        string elementValueString; // value if type is ELEMENT_STRING
        uint256 elementValueUintOrBool; // value if type is ELEMENT_UINT, 0/1 if type is ELEMENT_BOOLEAN
        // implied null if type is ELEMENT_NULL
    }

    /**
     * Convenience function to create a new values array.
     * @param length the length of the values array.
     * @return the new values array.
     */
    function newValuesArray(
        uint256 length
    ) internal pure returns (Json[] memory) {
        return new Json[](length);
    }

    /**
     * Convenience function to create a new keys array.
     * @param length the length of the keys array.
     * @return the new keys array.
     */
    function newKeysArray(
        uint256 length
    ) internal pure returns (string[] memory) {
        return new string[](length);
    }

    /**
     * Convenience function to create a new object element.
     * @param keys the keys of the object element.
     * @param values the values of the object element.
     * @return the new object element.
     */
    function newObjectElement(
        string[] memory keys,
        Json[] memory values
    ) internal pure returns (Json memory) {
        return
            Json({
                jsonType: JsonType.OBJECT, // type
                objectKeys: keys, // input
                values: values, // input
                stringEncodingFlag: StringEncodingFlag.NONE, // default
                elementValueString: "", // default
                elementValueUintOrBool: 0 // default
            });
    }

    /**
     * Convenience function to create a new array element.
     * @param values the values of the array element.
     * @return the new array element.
     */
    function newArrayElement(
        Json[] memory values
    ) internal pure returns (Json memory) {
        return
            Json({
                jsonType: JsonType.ARRAY, // type
                objectKeys: new string[](0), // default
                values: values, // input
                stringEncodingFlag: StringEncodingFlag.NONE, // default
                elementValueString: "", // default
                elementValueUintOrBool: 0 // default
            });
    }

    /**
     * Convenience function to create a new string element.
     * If base64 encoding is set as the encoding flag, the passed value will be encoded on WRITE and
     * should NOT already be encoded. Passing an already encoded value will result in double encoding.
     * @param value the string value of the element.
     * @param stringEncodingFlag the string encoding flag for the element.
     * @return the new string element.
     */
    function newStringElement(
        string memory value,
        StringEncodingFlag stringEncodingFlag
    ) internal pure returns (Json memory) {
        return
            Json({
                jsonType: JsonType.ELEMENT_STRING, // type
                objectKeys: new string[](0), // default
                values: new Json[](0), // default
                stringEncodingFlag: stringEncodingFlag, // input
                elementValueString: value, // input
                elementValueUintOrBool: 0 // default
            });
    }

    /**
     * Convenience function to create a new uint element.
     * @param value the uint value of the element.
     * @return the new uint element.
     */
    function newUintElement(uint256 value) internal pure returns (Json memory) {
        return
            Json({
                jsonType: JsonType.ELEMENT_UINT, // type
                objectKeys: new string[](0), // default
                values: new Json[](0), // default
                stringEncodingFlag: StringEncodingFlag.NONE, // default
                elementValueString: "", // default
                elementValueUintOrBool: value // input
            });
    }

    /**
     * Convenience function to create a new boolean element.
     * @param value the boolean value of the element.
     * @return the new boolean element.
     */
    function newBooleanElement(bool value) internal pure returns (Json memory) {
        return
            Json({
                jsonType: JsonType.ELEMENT_BOOLEAN, // type
                objectKeys: new string[](0), // default
                values: new Json[](0), // default
                stringEncodingFlag: StringEncodingFlag.NONE, // default
                elementValueString: "", // default
                elementValueUintOrBool: value ? 1 : 0 // input
            });
    }

    /**
     * @notice writes a json struct to a string
     * @param json the json struct to write
     * @return the json string
     */
    function write(Json memory json) internal pure returns (string memory) {
        if (json.jsonType == JsonType.OBJECT) {
            return _writeObject(json);
        } else if (json.jsonType == JsonType.ARRAY) {
            return _writeArray(json);
        } else if (json.jsonType == JsonType.ELEMENT_STRING) {
            return
                _writeString(json.elementValueString, json.stringEncodingFlag);
        } else if (json.jsonType == JsonType.ELEMENT_UINT) {
            return _writeUint(json.elementValueUintOrBool);
        } else if (json.jsonType == JsonType.ELEMENT_BOOLEAN) {
            return _writeBoolean(json.elementValueUintOrBool);
        } else {
            return _writeNull();
        }
    }

    /**
     * @notice writes a json struct of type JsonType.OBJECT to a string
     * @param json the json struct of type JsonType.OBJECT to write
     * @return the json string
     */
    function _writeObject(
        Json memory json
    ) private pure returns (string memory) {
        // pre-allocate string array to avoid dynamic memory allocation
        uint256 keysLength = json.objectKeys.length;
        string[] memory valueStrings = new string[](keysLength);
        for (uint256 i = 0; i < keysLength; i++) {
            // only trailing comma if not last child, per JSON spec
            string memory trailingChar = i < keysLength - 1 ? "," : "";
            valueStrings[i] = string.concat(
                '"',
                json.objectKeys[i], // keys assumed to be valid JSON keys
                '":',
                json.values[i].write(),
                trailingChar
            );
        }
        // concat all valueStrings and return
        return string.concat("{", _concatenateStrings(valueStrings), "}");
    }

    /**
     * @notice writes a json struct of type JsonType.ARRAY to a string
     * @param json the json struct of type JsonType.ARRAY to write
     * @return the json string
     */
    function _writeArray(
        Json memory json
    ) private pure returns (string memory) {
        // pre-allocate string array to avoid dynamic memory allocation
        uint256 valuesLength = json.values.length;
        string[] memory valueStrings = new string[](valuesLength);
        for (uint256 i = 0; i < valuesLength; i++) {
            // only trailing comma if not last child, per JSON spec
            string memory trailingChar = i < valuesLength - 1 ? "," : "";
            valueStrings[i] = string.concat(
                json.values[i].write(),
                trailingChar
            );
        }
        // concat all valueStrings and return
        return string.concat("[", _concatenateStrings(valueStrings), "]");
    }

    /**
     * @notice writes a string value to a valid json string.
     * If the string encoding flag is set to BASE64, the written value will be base64 encoded.
     * @param value the string value to write
     * @param stringEncodingFlag the string encoding flag for the value
     * @return the json string
     */
    function _writeString(
        string memory value,
        StringEncodingFlag stringEncodingFlag
    ) private pure returns (string memory) {
        if (stringEncodingFlag == StringEncodingFlag.BASE64) {
            return _writeBase64(value);
        } else {
            return _writePlainString(value);
        }
    }

    /**
     * @notice writes a string value to a valid json string
     * @param value the string value to write
     * @return the json string
     */
    function _writePlainString(
        string memory value
    ) private pure returns (string memory) {
        return string.concat('"', value, '"');
    }

    /**
     * @notice writes a base64 encoded string value to a valid json string
     * @param value the string value to write
     * @return the json string
     */
    function _writeBase64(
        string memory value
    ) private pure returns (string memory) {
        return string.concat('"', Base64.encode(bytes(value)), '"');
    }

    /**
     * @notice writes a uint value to a valid json string
     * @param value the uint value to write
     * @return the json string
     */
    function _writeUint(uint256 value) private pure returns (string memory) {
        // @dev no quotes around numbers
        return value.toString();
    }

    /**
     * @notice writes a boolean value to a valid json string.
     * If the value is equal to zero, it is written as false, otherwise it is written as true.
     * @dev Booleans are written as true or false without quotes.
     * @param value the value to write
     * @return the json string
     */
    function _writeBoolean(uint256 value) private pure returns (string memory) {
        // @dev no quotes around booleans
        return (value > 0) ? "true" : "false";
    }

    /**
     * @notice writes a null value to a valid json string
     * @return the json string
     */
    function _writeNull() private pure returns (string memory) {
        return "null";
    }

    /**
     * @notice Helper function to efficiently concatenate an array of strings.
     * @dev portions of code generated with AI Assistance, modified and tested by human developers.
     * @param strings The array of strings to concatenate.
     * @return The concatenated string.
     */
    function _concatenateStrings(
        string[] memory strings
    ) private pure returns (string memory) {
        uint totalLength = 0;

        // Step 1: Calculate the total length of the result string
        for (uint i = 0; i < strings.length; i++) {
            totalLength += bytes(strings[i]).length;
        }

        // Step 2: Allocate memory for the resulting string
        string memory result = new string(totalLength); // Allocate memory for the result, also defining its length
        uint resultPtr;
        assembly {
            resultPtr := add(result, 0x20) // Point to the start of the string's data in memory
        }

        // Step 3: Copy each string into the result using assembly
        for (uint i = 0; i < strings.length; i++) {
            bytes memory currentString = bytes(strings[i]);
            uint currentLength = currentString.length;
            uint currentPtr;

            assembly {
                currentPtr := add(currentString, 0x20) // Start of current string's data
            }

            // Copy the full 32-byte chunks
            uint chunks = currentLength / 32;
            uint remainder = currentLength % 32;

            for (uint j = 0; j < chunks; j++) {
                assembly {
                    let chunk := mload(currentPtr) // Load 32 bytes of the current string
                    mstore(resultPtr, chunk) // Store the 32 bytes into the result
                    resultPtr := add(resultPtr, 0x20) // Move the result pointer forward by 32 bytes
                    currentPtr := add(currentPtr, 0x20) // Move the current string pointer forward by 32 bytes
                }
            }

            // Handle remaining bytes (less than 32)
            if (remainder > 0) {
                assembly {
                    let chunk := mload(currentPtr) // Load 32 bytes
                    let mask := sub(shl(mul(8, sub(0x20, remainder)), 1), 1) // Create mask for the remainder
                    let lastChunk := and(chunk, not(mask)) // Mask out the excess bits
                    mstore(resultPtr, lastChunk) // Store the remaining bytes into the result
                    resultPtr := add(resultPtr, remainder) // Move the result pointer forward by the remainder length
                }
            }
        }

        return result;
    }
}
