const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//[["bat"],["nat","tan"],["ate","eat","tea"]]
const groupAnagrams = function (strs) {
    const result = strs.reduce((acum, val) => {
        const key = val.split('').sort().join('');
        if (!acum[key]) acum[key] = [];
        
        acum[key].push(val);
        return acum
    }, {});
    return Object.values(result)
};
