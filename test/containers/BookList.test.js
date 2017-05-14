import React from 'react';
import renderer from 'react-test-renderer';
import BookList from './../../src/containers/BookList';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('BookList component', () => {
  it('should render empty list of books', () => {

    const initialState = {
      books: [],
      activeView: '3books-view',
      search: {
        totalItems: 268,
        status: 'NONE',
        totalPages: 0,
        activePage: 0,
        query: {
          searchTerm: '',
          searchType: '',
          resultsByPage: 10,
          startIndex: 0
        }
      },
      searchHistory: []
    };

    let tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <BookList />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a list of books', () => {

    const initialState = {
      books: [{
        kind: 'books#volume',
        id: 'L08IrgEACAAJ',
        etag: 'wV3Qh0eZKPM',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/L08IrgEACAAJ',
        volumeInfo: {
          title: 'Docker Containers',
          subtitle: 'From Start to Enterprise',
          authors: [
            'Christopher Negus'
          ],
          publisher: 'Addison-Wesley Professional',
          publishedDate: '2015-09-01',
          description: 'The Practical Guide to Running Docker on Linux Systems or Cloud Environments Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy, and manage your most critical applications. In Doc ker Containers , Christopher Negus helps you master Docker containerization from the ground up. You\'ll start out running a few Docker container images in Ubuntu, Fedora, RHEL, CoreOS, or Project Atomic. By the time you\'ve finished, you\'ll be deploying enterprise-quality, multi-container Kubernetes setups in modern Linux and cloud environments. Writing for system administrators, software developers, and technology enthusiasts, Negus touches on every aspect of working with Docker: setting up containerized applications, working with both individual and multiple containers, running containers in cloud environments, and developing containers. Teaching through realistic examples of desktop applications, system services, and games, Negus guides you through building and deploying your own Dockerized applications. As you build your expertise, you\'ll also learn indispensable Docker best practices for building and integrating containers, managing Docker on a day-to-day basis, and much more: * Understanding what Docker is and what you can do with it * Installing Docker on standard Linux or specialized container operating systems such as Atomic Host and CoreOS * Setting up a container runtime environment and private Docker Registry * Creating, running, and investigating Docker images and containers * Finding, pulling, saving, loading, and tagging container images * Pulling and pushing containers between local systems and Docker Registries * Integrating Docker containers with host networking and storage * Building containers with the docker build command and Dockerfile files * Minimizing space consumption and erasing unneeded containers * Accessing special host privileges from within a container * Orchestrating multiple containers into complex applications with Kubernetes * Using super privileged containers in cloud environments * Managing containers in the cloud with Cockpit * Getting started with Docker container development * Learning container build techniques from shared Dockerfiles This book is part of the Pearson Content Update Program. As the technology changes, sections of this book will be updated or new sections will be added. The updates will be delivered to you via a free Web Edition of this book, which can be accessed with any Internet connection.',
          industryIdentifiers: [
            {
              type: 'ISBN_10',
              identifier: '013413656X'
            },
            {
              type: 'ISBN_13',
              identifier: '9780134136561'
            }
          ],
          readingModes: {
            text: false,
            image: false
          },
          pageCount: 350,
          printType: 'BOOK',
          categories: [
            'Computers'
          ],
          maturityRating: 'NOT_MATURE',
          allowAnonLogging: false,
          contentVersion: 'preview-1.0.0',
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          },
          language: 'en',
          previewLink: 'http://books.google.es/books?id=L08IrgEACAAJ&dq=%22docker%22+subject:Computers&hl=&cd=10&source=gbs_api',
          infoLink: 'http://books.google.es/books?id=L08IrgEACAAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api',
          canonicalVolumeLink: 'https://books.google.com/books/about/Docker_Containers.html?hl=&id=L08IrgEACAAJ'
        },
        saleInfo: {
          country: 'ES',
          saleability: 'NOT_FOR_SALE',
          isEbook: false
        },
        accessInfo: {
          country: 'ES',
          viewability: 'NO_PAGES',
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: 'ALLOWED',
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink: 'http://books.google.es/books/reader?id=L08IrgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api',
          accessViewStatus: 'NONE',
          quoteSharingAllowed: false
        },
        searchInfo: {
          textSnippet: '&quot;Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy and manage your most critical applications. In Docker Containers, Christopher Negus helps you master Docker containerization from the ground up .'
        }
      }],
      activeView: '3books-view',
      search: {
        totalItems: 268,
        status: 'DONE',
        totalPages: 27,
        activePage: 1,
        query: {
          searchTerm: '',
          searchType: '',
          resultsByPage: 10,
          startIndex: 0
        }
      },
      searchHistory: []
    };

    let tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <BookList />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});