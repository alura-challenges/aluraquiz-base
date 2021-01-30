import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

export default function Quiz({ externalDb }) {
    return (
        <ThemeProvider theme={externalDb.theme}>
            <QuizScreen
                externalQuestions={externalDb.questions}
                externalBg={externalDb.bg}
            />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
    const [projectName, githubName] = context.query.id.split('___')
    const externalDb = await fetch(`https://${projectName}.${githubName}.vercel.app/api/db`)
    .then((response) => response.json())
    .catch((err) => err)

    return {
        props: {
            externalDb
        }
    }
}