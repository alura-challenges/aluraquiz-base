import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizImage from '../src/components/QuizImage';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        <h1>{db.title}</h1>                        
                    </Widget.Header>
                    <QuizImage />
                    <Widget.Content>
                        <p>Jogador: {name} </p>                      
                        <p>Perguntas em desenvolvimento</p>                        
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
        </QuizBackground>
    );
}