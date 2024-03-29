/*
 * @Description: 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
                 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设
                 除了整数 0 之外，这个整数不会以零开头。
 * @Author: JunLiangWang
 * @Date: 2023-06-12 08:55:18
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2023-06-12 09:08:36
 */



/**
 * @description: 模拟法   TC:O(n)  SC:O(1)
 * @author: JunLiangWang
 * @param {*} digits  给定数组
 * @return {*}
 */                 
function simulation(digits){
    /**
     * 本方案利用模拟的方式，从后到前依次遍历数组给元素加一，
     * 当元素加一后并不需要进位(即:<10)，此时直接跳出循环返回
     * 结果即可，当元素需要进位则继续循环重复上一步骤。当遍历
     * 完所有元素，仍有进位，则在数组开头添加元素1。
     */

    // 从后向前遍历数组
    for(let i=digits.length-1;i>=0;i--){
        // 给元素+1
        let sum=digits[i]+1;
        // 将加一后的元素对10取余后重新赋值给元素
        // 之所以对10取余是防止进位的情况
        digits[i]=sum%10;
        // 当加一对10取余后仍等于加一时的值，证明
        // 无进位的情况，直接返回即可
        if(digits[i]===sum)return digits;
    }
    // 遍历完所有元素并未跳出，证明还需要进一位
    // 在数组开头添加一个1元素
    digits.splice(0,0,1);
    // 返回结果
    return digits;
}