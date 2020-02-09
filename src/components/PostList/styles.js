import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 162px;

  > ul {
    list-style: none;

    > li {
      margin: 20px 0px;
    }
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
  padding: 20px;
  border-radius: 4px;
  color: #3e3e3e;

  ul {
    list-style: none;
    border-top: 1px solid #eee;
    padding-top: 20px;

    li {
      margin: 0px;

      & + li {
        margin-top: 10px;
      }
    }

    div.comment {
      display: flex;

      img {
        height: 28px;
        width: 28px;
        border-radius: 14px;
      }
    }

    div.commentContent {
      border-radius: 20px;
      background-color: #eee;
      padding: 10px 15px;
      margin-left: 10px;

      p {
        white-space: pre-wrap;
        line-height: 20px;
        font-size: 13px;
      }
    }
  }

  div.originalPost {
    margin-bottom: 20px;

    p {
      white-space: pre-wrap;
      margin-top: 15px;
      line-height: 22px;
    }
  }
`;

export const Author = styled.div`
  display: flex;

  img {
    height: 32px;
    width: 32px;
    border-radius: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;

    h3 {
      font-size: 14px;
      line-height: 16px;
      color: #4a4a4a;
      margin-bottom: 3px;
    }

    span {
      color: #9a9a9a;
      font-size: 11px;
      line-height: 13px;
    }
  }
`;
