import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>Inazuma Eleven</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Vamos nos divertir testando nosso conhecimento sobre o melhor time de futebol de todos os tempos.</p>
          </Widget.Content>


        </Widget>
        
        <Widget>
         <Widget.Content>

            <h1>Quizes Relacionados</h1>
            <p>https://onepiece-quiz-imersao-react-next-js.marioandre01.vercel.app</p>
            <p>https://aluraquiz-base-git-master.gtretow.vercel.app</p>
            <p>https://naruto-quiz.llofyy.vercel.app/</p>
            

          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/imaggine" />
    </QuizBackground>
  )
}
