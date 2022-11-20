// 9. What is the best way to avoid deadlocks when using async/await?
// Answer : deadlock is a condition where two or more processes try to access the same resources that is acquired by other process. Here, the process is waiting for release of resources to use it, resulting in deadlock.
// a deadlock occurs when a process is waiting for an asynchronous operation to complete but is unable to do so because the other process is also waiting for an asynchronous operation to complete
// How to avoid deadlock ?
// 1. Avoid Nested Locks: avoid giving a lock to multiple threads if we have already provided a lock to one thread. Since we must avoid allocating a lock to multiple threads.
// 2. Use Lock Ordering: Always assign a numeric value to each lock. Before acquiring the lock with a higher numeric value, acquire the locks with a lower numeric value.
// 3. Lock Time-out: We can also specify the time for a thread to acquire a lock. If a thread does not acquire a lock, the thread must wait for a specific time before retrying to acquire a lock.
// 4. Avoid Unnecessary Locks: We should use locks only for those members on which it is required. Unnecessary use of locks leads to a deadlock situation.
