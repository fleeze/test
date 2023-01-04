const longestPalindrome = function(s) {
    if (!s) return ''
    if (s.length === 1) return s
    if (s.length === 2) return s[0] === s[1] ? s : s[1]
    let maxStr = ''
    const len = s.length
    for (let i = 0; i < len; i++) {
        if (s[i] === s[i + 1]) {
            center(i, i + 1)
        }
        center(i, i)
    }

    function center(left, right) {
        let arr = [left, right]
        while (left >= 0 && right < len && s[left] === s[right]) {
            left--
            right++
        }
        if (right - left > maxStr.length) {
            console.log('max', arr, s.slice(left + 1, right), [left, right])
            maxStr = s.slice(left + 1, right)
        }
    }
    return maxStr
};
longestPalindrome('ccc')