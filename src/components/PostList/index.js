import React, { Component } from 'react';

import { Container, PostContainer, Author } from './styles';
import julio from '../../assets/perfil-julio.png';
import diego from '../../assets/perfil-diego.png';
import gabriel from '../../assets/perfil-gabriel.png';
import clara from '../../assets/perfil-clara.png';
import cezar from '../../assets/perfil-cezar.png';

function Comment({ data, key }) {
  return (
    <li key={key}>
      <div className="comment">
        <img src={data.author.avatar} alt=""></img>
        <div className="commentContent">
          <p>
            <strong>{data.author.name}</strong> {data.content}
          </p>
        </div>
      </div>
    </li>
  );
}

function Post({ data, key }) {
  return (
    <li key={key}>
      <PostContainer>
        <div className="originalPost">
          <Author>
            <img src={data.author.avatar} alt=""></img>
            <div>
              <h3>{data.author.name}</h3>
              <span>{data.date}</span>
            </div>
          </Author>
          <p>{data.content}</p>
        </div>
        <ul>
          {data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </ul>
      </PostContainer>
    </li>
  );
}

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: julio,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: diego,
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: gabriel,
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da RocketSeat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: clara,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: cezar,
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Gabriel Lisboa',
          avatar: gabriel,
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da RocketSeat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: clara,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: cezar,
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <ul>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </Container>
    );
  }
}
