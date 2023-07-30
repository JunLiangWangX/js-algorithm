# js-algorithm
Use js to implement leetcode algorithm



| 题目编号(topic number)                                       | 文件名(file name)                                            | 描述                                                         | description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1~50                                                         | [part1](https://github.com/JunLiangWangX/js-algorithm/tree/main/part1) | 题1到题50归档集合                                            | Question 1 to Question 50 archive collection                 |
| [#51](https://leetcode.cn/problems/n-queens/)                | [N-Queens](https://github.com/JunLiangWangX/js-algorithm/blob/main/51.N-Queens.js) | n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。 | The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. |
| [#52](https://leetcode.cn/problems/n-queens-ii/)             | [N-QueensII](https://github.com/JunLiangWangX/js-algorithm/blob/main/52.N-QueensII.js) | n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。 | The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.Given an integer n, return the number of distinct solutions to the n-queens puzzle. |
| [#53](https://leetcode.cn/problems/maximum-subarray/)        | [MaximumSubarray](https://github.com/JunLiangWangX/js-algorithm/blob/main/53.MaximumSubarray.js) | 给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。 | Given an integer array nums, find the subarray with the largest sum, and return its sum. |
| [#54](https://leetcode.cn/problems/spiral-matrix/)           | [SpiralMatrix](https://github.com/JunLiangWangX/js-algorithm/blob/main/54.SpiralMatrix.js) | **子数组** 是数组中的一个连续部分。给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。 | Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*. |
| [#55](https://leetcode.cn/problems/jump-game/)               | [JumpGame](https://github.com/JunLiangWangX/js-algorithm/blob/main/55.JumpGame.js) | 给定一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标。 | You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.Return true if you can reach the last index, or false otherwise. |
| [#56](https://leetcode.cn/problems/merge-intervals/)         | [MergeIntervals](https://github.com/JunLiangWangX/js-algorithm/blob/main/56.MergeIntervals.js) | 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。 | Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. |
| [#57](https://leetcode.cn/problems/insert-interval/)         | [InsertInterval](https://github.com/JunLiangWangX/js-algorithm/blob/main/57.InsertInterval.js) | 给你一个 **无重叠的** *，*按照区间起始端点排序的区间列表。在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。 | Gives you a **non-overlapping** * list of intervals sorted by their start and end points. To insert a new interval into a list, you need to make sure that the intervals in the list are still ordered and not overlapping (merging intervals if necessary). |
| [#58](https://leetcode.cn/problems/length-of-last-word/)     | [LengthOfLastWord](https://github.com/JunLiangWangX/js-algorithm/blob/main/58.LengthOfLastWord.js) | 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。 | Given a string s consisting of words and spaces, return the length of the last word in the string.A word is a maximal substring consisting of non-space characters only. |
| [#59](https://leetcode.cn/problems/spiral-matrix-ii/)        | [SpiralMatrixII](https://github.com/JunLiangWangX/js-algorithm/blob/main/59.SpiralMatrixII.js) | 给你一个正整数 `n` ，生成一个包含 `1` 到 `n^2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。 | Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order. |
| [#60](https://leetcode.cn/problems/permutation-sequence/)    | [PermutationSequence](https://github.com/JunLiangWangX/js-algorithm/blob/main/60.PermutationSequence.js) | 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。按照排列升序返回第 k 个排列。 | Given a set [1,2,3,...,n], where all elements can form n! kind of permutation. Return the kth permutation in ascending order. |
| [#61](https://leetcode.cn/problems/rotate-list/)             | [RotateList](https://github.com/JunLiangWangX/js-algorithm/blob/main/61.RotateList.js) | 给你一个链表的头节点 `head` ，旋转链表，将链表每个节点向右移动 `k` 个位置。 | Given the `head` of a linked list, rotate the list to the right by `k` places. |
| [#62](https://leetcode.cn/problems/unique-paths/)            | [UniquePaths](https://github.com/JunLiangWangX/js-algorithm/blob/main/62.UniquePaths.js) | 一个机器人位于一个 m x n 网格的左上角机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角问总共有多少条不同的路径？ | A robot is located in the upper left corner of an m x n grid. The robot can only move one step down or to the right at a time. How many different ways are there always in the bottom right corner of the robot trying to figure out the network grid? |
| [#63](https://leetcode.cn/problems/unique-paths-ii/)         | [UniquePathsII](https://github.com/JunLiangWangX/js-algorithm/blob/main/63.UniquePathsII.js) | 一个机器人位于一个 m x n 网格的左上角 。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？网格中的障碍物和空位置分别用 1 和 0 来表示。 | A robot is located in the upper left corner of an m x n grid. The robot can only move one step down or to the right at a time. The robot tries to reach the bottom right corner of the grid. Now consider that there are obstacles in the grid. So how many different paths will there be from top left to bottom right? Obstacles and empty positions in the grid are represented by 1 and 0, respectively. |
| [#64](https://leetcode.cn/problems/minimum-path-sum/)        | [MinimumPathSum](https://leetcode.cn/problems/minimum-path-sum/) | 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。说明：每次只能向下或者向右移动一步。 | Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.Note: You can only move either down or right at any point in time. |
| [#65](https://leetcode.cn/problems/valid-number/)            | [ValidNumber](https://github.com/JunLiangWangX/js-algorithm/blob/main/65.ValidNumber.js) | 给定一个字符串，判断字符串是否一个有效的数字                 | Given a string, determine whether it is a valid number       |
| [#66](https://leetcode.cn/problems/plus-one/)                | [PlusOne](https://github.com/JunLiangWangX/js-algorithm/blob/main/66.PlusOne.js) | 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。 | You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.Increment the large integer by one and return the resulting array of digits. |
| [#67](https://leetcode.cn/problems/add-binary/)              | [AddBinary](https://github.com/JunLiangWangX/js-algorithm/blob/main/67.AddBinary.js) | 给你两个二进制字符串 `a` 和 `b` ，以二进制字符串的形式返回它们的和。 | Given two binary strings `a` and `b`, return *their sum as a binary string*. |
| [#68](https://leetcode.cn/problems/text-justification/)      | [TextJustification](https://github.com/JunLiangWangX/js-algorithm/blob/main/68.TextJustification.js) | 给定一个单词数组 `words` 和一个长度 `maxWidth` ，重新排版单词，使其成为每行恰好有 `maxWidth` 个字符，且左右两端对齐的文本。 | Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. |
| [#69](https://leetcode.cn/problems/sqrtx/)                   | [Sqrt(x)](https://github.com/JunLiangWangX/js-algorithm/blob/main/69.Sqrt(x).js) | 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。结果只保留 整数部分 | Given a non-negative integer x, compute and return the arithmetic square root of x. Only the integer part of the result is kept |
| [#70](https://leetcode.cn/problems/climbing-stairs/)         | [ClimbingStairs](https://github.com/JunLiangWangX/js-algorithm/blob/main/70.ClimbingStairs.js) | 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以  爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ | You are climbing a staircase. It takes n steps to reach the top.Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? |
| [#71](https://leetcode.cn/problems/simplify-path/)           | [SimplifyPath](https://github.com/JunLiangWangX/js-algorithm/blob/main/71.SimplifyPath.js) | 给你一个字符串 `path` ，表示指向某一文件或目录的 Unix 风格 **绝对路径** （以 `'/'` 开头），请你将其转化为更加简洁的规范路径。 | Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path. |
| [#72](https://leetcode.cn/problems/edit-distance/)           | [EditDistance](https://github.com/JunLiangWangX/js-algorithm/blob/main/72.EditDistance.js) | 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数，  你可以对一个单词进行如下三种操作：插入一个字符、删除一个字符、替换一个字符。 | Given you two words word1 and word2, please return the minimum number of operations used to convert word1 into word2. You can perform the following three operations on a word: insert a character, delete a character, and replace a character. |
| [#73](https://leetcode.cn/problems/set-matrix-zeroes/)       | [SetMatrixZeroes](https://github.com/JunLiangWangX/js-algorithm/blob/main/73.SetMatrixZeroes.js) | 给定一个 `m x n` 的矩阵，如果一个元素为 **0** ，则将其所在行和列的所有元素都设为 **0** 。请使用 **[原地](http://baike.baidu.com/item/原地算法)** 算法。 | Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.You must do it in place.x |
| [#74](https://leetcode.cn/problems/search-a-2d-matrix/)      | [Search2DMatrix](https://github.com/JunLiangWangX/js-algorithm/blob/main/74.Search2DMatrix.js) | 编写一个高效的算法来判断 m x n 升序矩阵中，是否存在一个目标值。 | Write an efficient algorithm to determine whether a target value exists in an m x n ascending matrix. |
| [#75](https://leetcode.cn/problems/sort-colors/)             | [SortColors](https://github.com/JunLiangWangX/js-algorithm/blob/main/75.SortColors.js) | 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。 | Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. |
| [#76](https://leetcode.cn/problems/minimum-window-substring/) | [MinimumWindowSubstring](https://github.com/JunLiangWangX/js-algorithm/blob/main/76.MinimumWindowSubstring.js) | 给你一个字符串`s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。 | Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "". |
| [#77](https://leetcode.cn/problems/combinations/)            | [Combinations](https://github.com/JunLiangWangX/js-algorithm/blob/main/77.Combinations.js) | 给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。 | Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].You may return the answer in any order. |
| [#78](https://leetcode.cn/problems/subsets/)                 | [Subsets](https://github.com/JunLiangWangX/js-algorithm/blob/main/78.Subsets.js) | 给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。 | Given an integer array nums of unique elements, return all possible subsets (the power set).The solution set must not contain duplicate subsets. Return the solution in any order. |
| [#79](https://leetcode.cn/problems/word-search/)             | [WordSearch](https://github.com/JunLiangWangX/js-algorithm/blob/main/79.WordSearch.js) | 给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。 | Given an m x n grid of characters board and a string word, return true if word exists in the grid. |
| [#80](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/) | [RemoveDuplicatesSortedArrayII](https://github.com/JunLiangWangX/js-algorithm/blob/main/80.RemoveDuplicatesSortedArrayII.js) | 给你一个有序数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使得出现次数超过两次的元素**只出现两次** ，返回删除后数组的新长度。 | Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same. |
| [#81](https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/) | [SearchRotatedSortedArrayII](https://github.com/JunLiangWangX/js-algorithm/blob/main/81.%20SearchRotatedSortedArrayII.js) | 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。 | Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums. |
| [#82](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) | [RemoveDuplicatesSortedListII](https://github.com/JunLiangWangX/js-algorithm/blob/main/82.RemoveDuplicatesSortedListII.js) | 给定一个已排序的链表的头 `head` ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 *已排序的链表* 。 | Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well. |
| [#83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/) | [RemoveDuplicatesSortedList](https://github.com/JunLiangWangX/js-algorithm/blob/main/83.RemoveDuplicatesSortedList.js) | 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。 | Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. |
| [#84](https://leetcode.cn/problems/largest-rectangle-in-histogram/) | [LargestRectangle](https://github.com/JunLiangWangX/js-algorithm/blob/main/84.LargestRectangle.js) | 给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。 | Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. |
| [#85](https://leetcode.cn/problems/maximal-rectangle/)       | [MaximalRectangle](https://github.com/JunLiangWangX/js-algorithm/blob/main/85.MaximalRectangle.js) | 给定一个仅包含 `0` 和 `1` 、大小为 `rows x cols` 的二维二进制矩阵，找出只包含 `1` 的最大矩形，并返回其面积。 | Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area. |
| [#86](https://leetcode.cn/problems/partition-list/)          | [PartitionList](https://github.com/JunLiangWangX/js-algorithm/blob/main/86.PartitionList.js) | 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。你应当 保留 两个分区中每个节点的初始相对位置。 | Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.You should preserve the original relative order of the nodes in each of the two partitions. |
| [#87](https://leetcode.cn/problems/scramble-string/)         | [ScrambleString](https://github.com/JunLiangWangX/js-algorithm/blob/main/87.ScrambleString.js) | 给你两个 **长度相等** 的字符串 `s1` 和 `s2`，判断 `s2` 是否是 `s1` 的扰乱字符串。如果是，返回 `true` ；否则，返回 `false` 。 | Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false. |
| [#88](https://leetcode.cn/problems/merge-sorted-array/)      | [MergeSortedArray](https://github.com/JunLiangWangX/js-algorithm/blob/main/88.MergeSortedArray.js) | 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。。 | You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.Merge nums1 and nums2 into a single array sorted in non-decreasing order. |
| [#89](https://leetcode.cn/problems/gray-code/)               | [GrayCode](https://github.com/JunLiangWangX/js-algorithm/blob/main/89.GrayCode.js) | 给你一个整数 n ，返回任一有效的 n 位格雷码序列 。            | Given an integer `n`, return *any valid **n-bit gray code sequence***. |
| [#90](https://leetcode.cn/problems/subsets-ii/)              | [SubsetsII](https://github.com/JunLiangWangX/js-algorithm/blob/main/90.SubsetsII.js) | 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。 | Given an integer array nums that may contain duplicates, return all possible subsets (the power set).The solution set must not contain duplicate subsets. Return the solution in any order. |
| [#91](https://leetcode.cn/problems/decode-ways/)             | [DecodeWays](https://leetcode.cn/problems/decode-ways/)      | 给你一个只含数字的 **非空** 字符串 `s` ，请计算并返回 **解码** 方法的 **总数** 。 | Given a string s containing only digits, return the number of ways to decode it. |
| [#92](https://leetcode.cn/problems/reverse-linked-list-ii/)  | [ReverseLinkedListII](https://github.com/JunLiangWangX/js-algorithm/blob/main/92.ReverseLinkedListII.js) | 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。 | Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list. |
| [#93](https://leetcode.cn/problems/restore-ip-addresses/)    | [RestoreIPAddresses](https://github.com/JunLiangWangX/js-algorithm/blob/main/93.RestoreIPAddresses.js) | 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，                 这些地址可以通过在 s 中插入 '.' 来形成。 | Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. |
| [#94](https://leetcode.cn/problems/binary-tree-inorder-traversal/) | [BinaryTreeInorderTraversal](https://github.com/JunLiangWangX/js-algorithm/blob/main/94.BinaryTreeInorderTraversal.js) | 给定一个二叉树的根节点 `root` ，返回 *它的 **中序** 遍历* 。 | Given the root of a binary tree, return the inorder traversal of its nodes' values. |
| [#95](https://leetcode.cn/problems/unique-binary-search-trees-ii/) | [UniqueBinarySearchTreesII](https://github.com/JunLiangWangX/js-algorithm/blob/main/95.UniqueBinarySearchTreesII.js) | 给你一个整数 `n` ，请你生成并返回所有由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的不同 **二叉搜索树** 。可以按 **任意顺序** 返回答案。 | Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order. |

