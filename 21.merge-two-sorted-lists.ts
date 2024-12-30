/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  print = () => {
    let current: ListNode | null = this;
    const values: number[] = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(" -> "));
  };
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) return list1 || list2;

  let head2 = list2;

  for (; list1; list1 = list1.next) {
    for (let cur2: ListNode | null = head2; cur2; cur2 = cur2!.next) {
      if (!cur2.next) {
        if (list1.val < cur2.val) {
          const newNode = new ListNode(list1.val, cur2);
          head2 = newNode;
        } else {
          const newNode = new ListNode(list1.val);
          cur2.next = newNode;
        }
        break;
      } else if (list1.val >= cur2.val && list1.val < cur2.next.val) {
        const newNode = new ListNode(list1.val, cur2.next);
        cur2.next = newNode;
        break;
      } else if (list1.val < cur2.val) {
        const newNode = new ListNode(list1.val, cur2);
        head2 = newNode;
        break;
      }
    }
  }

  return head2;
}
// @lc code=end
