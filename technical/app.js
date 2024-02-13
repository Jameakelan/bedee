function commonPrefix(data = []) {
  /**
   * The Longest Common Prefix (LCP) is the prefix shared by all the strings in the list.
   * This method apply binary search to find the common prefix
   */

  /// Determine constraints 1 <= strs.length <= 200
  /// 0 <= strs[i].length <= 200
  if (
    data.length < 1 ||
    data.length > 200 ||
    Math.max(...data.map((item) => item.length)) > 200
  )
    return "";

  /// find the minimum length of the string
  const min = Math.min(...data.map((item) => item.length));

  let LOW = 0;
  let HIGH = min;

  /**
   * index of the longest common prefix
   * which is the minimum length of the string
   * If LCP is 0, then there is no common prefix
   */
  let LCP = 0;

  while (LOW <= HIGH) {
    /// find the middle index
    let MID = Math.floor((LOW + HIGH) / 2);

    /// Asses the common prefix based on the middle index of first string
    const prefix = data[0].slice(0, MID);

    /// Check if the prefix is common to all the strings in the list
    const isCommonPrefix = data.every((item) => item.slice(0, MID) === prefix);

    /**
     * If isCommonPrefix is true, then the prefix is common to all the strings
     * and FLAG the MID as the LCP which matched with all the strings
     */
    if (isCommonPrefix) {
      LCP = MID;

      /// move the LOW to the right for finding more the longest common prefix
      LOW = MID + 1;
    } else {
      /// move the HIGH to the left for trying to find the longest common prefix
      HIGH = MID - 1;
    }
  }

  return data[0].slice(0, LCP);
}

console.log("Example 1:");
console.log(commonPrefix(["flower", "flow", "flight"]));
console.log("Example 2:");
console.log(commonPrefix(["dog", "racecar", "car"]));
console.log("Example 3:");
console.log(commonPrefix(["flower", "fly", "car"]));
console.log("Example 4:");
console.log(commonPrefix(["flower", "flow", "flownight"]));
