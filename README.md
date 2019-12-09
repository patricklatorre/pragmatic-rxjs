# What is it?

Library for handling asynchronous code by making **event-based** programs

# Components

Four main components:

1. Observables
2. Subscribers *(observer)*
3. Operators
4. Subjects *(observer)*

## Observables

- **Stream of data** broadcasted over time as **events**
- *Example:* Mouse click events

    ![https://i.imgur.com/xI2nKKc.png](https://i.imgur.com/xI2nKKc.png)

- Observables allow us to treat anything as a sequence of events
- *Example*: An arbitrary array `[2, 30, 22, 5, 60, 1]`

![https://i.imgur.com/YklOxgP.png](https://i.imgur.com/YklOxgP.png)

## Subscribers

- Event listener — that's it.

## Operators

- A function **pipeline** that does something with the data before sending it out as an event

![https://i.imgur.com/VqRW4en.png](https://i.imgur.com/VqRW4en.png)

## Subject

- Both an Observable and an Observer
- Usually used as a "middleman" between an data/event source and a subscriber

    							eventSource
    								|
    							subject.next(event)
    								|
    								V
    							subject
    								^
    								|
    							subject.subscribe()
    								|
    							subscriber
