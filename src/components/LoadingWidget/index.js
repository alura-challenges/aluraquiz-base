import styled from 'styled-components';
import Widget from '../../components/Widget'

const Skeleton = styled.div`
  background:linear-gradient( -90deg, #E0961F, #9E6A16,#E0961F);
  background-size: 400% 400%;
  border-radius: 8px;
  animation: shimmer 1.2s ease-in-out infinite;
  height: 20px;
  width: 100%;

  @keyframes shimmer{
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  & + & {
    margin-top: 5px;
    height: 40px;
  }
  
`;

export default function LoadingWidget() {

  return (
    <Widget>
      <Widget.Header>
        <Skeleton />
      </Widget.Header>
      <Widget.Content>
        <Skeleton />
        <Skeleton style= {{ height: '20px'}}/>
        <Skeleton style={{marginTop: '25px'}}/>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton style={{marginTop: '25px'}}/>
      </Widget.Content>
    </Widget>
  );
}