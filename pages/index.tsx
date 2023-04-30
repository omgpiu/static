import { useState } from "react";
import axios from "axios";
import { prisma } from "@/server/db";

interface Message {
    title: string;

}

export default function Home({messages}: { messages: Message[] }) {
    const [count, setCount] = useState<Message[]>(messages)

    const handleSubmit = async () => {
        try {
            const {data} = await axios.get('/api/messages')
            setCount(data)
        } catch (e) {
            console.log(e)
        }
    }
    const handleCreate = async () => {
        try {
            const {data} = await axios.post('/api/messages', {
                title: 'Hello',
                content: 'World'
            })
            setCount([...count, data])
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            {count.length && count.map((item, index) => <div key={index}>
                {item.title}
            </div>)}
            Привет Альберт
            Деплой пошел
            Деплой пошел
            Деплой пошел
            Деплой пошелi
            Деплой пошелi
            Деплой пошелi
            Деплой пошел12
            Деплой пошел
            Деплой пошел
            Деплой пошел
            Де
            Деплой пошел
            <button onClick={handleSubmit}>Get messages</button>
            <button onClick={handleCreate}>PRESS ME</button>
        </main>
    )
}

export async function getServerSideProps() {
    try{
        const data = await prisma.message.findMany()
        return {
            props: {
                messages: data,
            },
        }
    }
    catch (e) {
        return {
            props: {
                messages: [],
            },
        }
    }
}