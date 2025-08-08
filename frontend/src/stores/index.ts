import { defineStore } from 'pinia'

// 使用 TypeScript 接口定义 state 类型
interface CounterState {
    count: number
    lastUpdated?: string
}

export const useCounterStore = defineStore('counter', {
    state: (): CounterState => ({
        count: 0,
        lastUpdated: undefined
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        formattedDate: (state) => {
            return state.lastUpdated ? new Date(state.lastUpdated).toLocaleString() : 'N/A'
        }
    },
    actions: {
        increment() {
            this.count++
            this.lastUpdated = new Date().toISOString()
        },
        async incrementAsync() {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment()
        }
    }
})
