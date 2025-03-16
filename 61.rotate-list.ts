/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  // Check input value
  if (k === 0) return head;

  let tail = head; // The last node of the list
  let listLength = 0; // The length of the list

  // Find the the tail and the length of the list
  for (tail = head; tail?.next; tail = tail.next, listLength++);
  listLength++;

  // Count the number of rotations
  if (k % listLength === 0) return head;
  else if (listLength > k) k = listLength - k;
  else k = listLength - (k % listLength);

  if (listLength === 1) return head;

  // Rotate (exception case when listLength === 2)
  if (listLength === 2) {
    // Assign null to the current head
    head!.next = null;

    // Handle the tail
    tail!.next = head;

    return tail;
  }

  // Rotate (the rest cases)
  for (; k > 0; k--) {
    // Declare a new head as the next node
    const newHead = new ListNode(head?.next?.val, head?.next?.next);

    // Assign null to the current head
    head!.next = null;

    // Handle the tail
    tail!.next = head;
    tail = head!;

    // Assign the new head to the current head
    head = newHead;
  }

  return head;
}
// @lc code=end
