import styled from 'styled-components'


type SectionProps = {
  isActive: boolean
}

export const Section = styled.div<SectionProps>`
  height: 940px;
  max-height: ${(props) => (props.isActive ? '940px' : '700px')};
  background: ${(props) => (props.isActive ? '#23D4AA' : 'none')};
  transition: max-height 0.3s linear, background 1.5s linear;
  display: grid;
  margin-top: 80px;
`

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  display: flex;
`

type BgImgProps = {
  isActive: boolean
}

export const BgImg = styled.div<BgImgProps>`
  position: relative;
  overflow: hidden;
  width: 540px;
  min-width: 540px;
  height: 500px;
  border-top-left-radius: 110px;
  border-bottom-right-radius: 110px;
  background: #021720;
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.1);
  z-index: 1;

  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-100px)')};
  transition: all 0.8s linear;

  img {
    object-fit: cover;
    transform: ${(props) => (props.isActive ? 'scale(1)' : 'scale(1.2)')};
    transition: all 0.8s linear;
  }
`

type TextProps = {
  isActive: boolean
}

export const Text = styled.div<TextProps>`
  margin-left: 95px;
  align-self: center;

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(props) => (props.isActive ? '#021720' : '#23D4AA')};

    &:before {
      content: '';
      left: 0;
      width: 49%;
      border-bottom: solid 1px;
      margin-top: 8px;
      position: absolute;
    }
  }

  h2 {
    line-height: 100%;
    &::after {
      content: '.';
      color: #23D4AA;
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
  }
`