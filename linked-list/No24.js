var swapPairs = function(head) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next != null && temp.next.next != null) {
        let pre = temp.next;
        let cur = temp.next.next;
        temp.next = cur;
        pre.next = cur.next;
        cur.next = pre;
        temp = pre;
    }

    return dummyHead.next;
};