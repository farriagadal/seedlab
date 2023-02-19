import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  border: 1px solid #072C3C;
  border-radius: 20px 0;
  padding: 20px 17px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: var(--color-2);
    transform: translateY(-20px);
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-top-left-radius: 16px;
  }

  p {
    margin-top: 5px;
    margin-bottom: 8px;
  }

  span {
    font-size: 12px;
    line-height: 120%;
    font-weight: 100;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3; 
    -webkit-box-orient: vertical;
  }

  a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  label {
    display: block;
    margin: 5px 0;
    font-size: 14px;
    color: var(--color-5);
  }
`
