import React from 'react'

export default function QuizDaGaleraPage() {
    return <div>Desafio da próxima aula junto com as animações</div>
}

export async function getServerSideProps(context) {
    console.log('Infos', context.query.id)
    try {
        const response = await fetch(
            'https://tibia-quizz.bentoco.vercel.app/api/db'
        )
    } catch (err) {
        console.error(err)
    }

    return {
        props: {},
    }
}
