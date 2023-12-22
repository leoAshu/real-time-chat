export type UserId = string

export interface Chat {
    id: string
    userId: UserId
    name: string
    message: string
    upvotes: UserId[]
}

export abstract class Store {
    constructor() {}

    initRoom(roomId: string) {}

    getChats(roomId: string, limit: number, offset: number) {}

    addChat(roomId: string, userId: UserId, name: string, message: string, upvotes: UserId[]) {}

    upvote(roomId: string, userId: UserId, chatId: string) {}
}
