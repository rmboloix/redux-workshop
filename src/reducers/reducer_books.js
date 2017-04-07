import {SEARCH_RESPONSE, RESET_BOOKS} from '../actions/index';

let initialState = {
  "kind": "books#volumes",
  "totalItems": 0,
  "items": []
};

initialState = [
    {
      "kind": "books#volume",
      "id": "bOrnBwAAQBAJ",
      "etag": "DQT5oPCfV3A",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/bOrnBwAAQBAJ",
      "volumeInfo": {
        "title": "Build Your Own PaaS with Docker",
        "authors": [
          "Oskar Hane"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-04-07",
        "description": "This book is intended for those who want to take full advantage of separating services into module containers and connect them to form a complete platform. It will give you all the insights and knowledge needed to run your own PaaS.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781784394561"
          },
          {
            "type": "ISBN_10",
            "identifier": "1784394564"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 138,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=bOrnBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=bOrnBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=bOrnBwAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=bOrnBwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-bOrnBwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 24.19,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 22.98,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=bOrnBwAAQBAJ&rdid=book-bOrnBwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.419E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.298E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=bOrnBwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This book is intended for those who want to take full advantage of separating services into module containers and connect them to form a complete platform. It will give you all the insights and knowledge needed to run your own PaaS."
      }
    },
    {
      "kind": "books#volume",
      "id": "Dm1LDAAAQBAJ",
      "etag": "E+Y0v6TnZpw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Dm1LDAAAQBAJ",
      "volumeInfo": {
        "title": "Learning Docker Networking",
        "authors": [
          "Rajdeep Dua",
          "Vaibhav Kohli",
          "Santosh Kumar Konduri"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-02-23",
        "description": "Become a proficient Linux administrator by learning the art of container networking with elevated efficiency using Docker About This Book Set up, configure, and monitor a virtual network of containers using a bridge network and virtual switches Master the skill of networking Docker Containers using frameworks such as Kubernetes, Docker Swarm, and Mesosphere Acquire hands-on experience through practical examples of Docker networking spanning multiple containers, over multiple hosts, clubbed with various frameworks Who This Book Is For If you are a Linux administrator who wants to learn networking using Docker to ensure the efficient administration of core elements and applications, then this book is for you. Basic knowledge of LXC/Docker is assumed. What You Will Learn Get to know the basics of networking and see how Docker networking works Expose the strengths and weaknesses of the current Docker network implementation and third party landscape Understand Docker networking spanning multiple containers over multiple hosts through practical examples Observe the pitfalls of Docker networking and how to overcome them Learn how Docker networking works for Docker Swarm and Kubernetes Configure Networking using Docker's container network model (CNM) Explore OpenvSwitch to connect contain In Detail Docker is a Linux container implementation that enables the creation of light weight portable development and production environments. These environments can be updated incrementally. Docker achieves this by leveraging containment principles like cgroups and Linux namespaces along with Overlay filesystem based portable images. Docker provides the networking primitives that allow administrators to specify how different containers network with each application and connect each of its components, then distribute them across a large number of servers and ensure coordination between them irrespective of the host or VM they are running in. This book will show you how to create, deploy, and manage a virtual network for connecting containers spanning single or multiple hosts. Style and approach This step-by-step guide covers the fundamentals relating to typical applications with a practical approach. There is a focus on providing the practical skills required to develop applications, with a summary of the key concepts where necessary.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785288319"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785288318"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 176,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Dm1LDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Dm1LDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Dm1LDAAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Dm1LDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-Dm1LDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Dm1LDAAAQBAJ&rdid=book-Dm1LDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Dm1LDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Become a proficient Linux administrator by learning the art of container networking with elevated efficiency using Docker About This Book Set up, configure, and monitor a virtual network of containers using a bridge network and virtual ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "wpYpCwAAQBAJ",
      "etag": "KPLc9U0llW8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/wpYpCwAAQBAJ",
      "volumeInfo": {
        "title": "Using Docker",
        "subtitle": "Developing and Deploying Software with Containers",
        "authors": [
          "Adrian Mouat"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2015-12-09",
        "description": "Docker containers offer simpler, faster, and more robust methods for developing, distributing, and running software than previously available. With this hands-on guide, you’ll learn why containers are so important, what you’ll gain by adopting Docker, and how to make it part of your development process. Ideal for developers, operations engineers, and system administrators—especially those keen to embrace a DevOps approach—Using Docker will take you from Docker and container basics to running dozens of containers on a multi-host system with networking and scheduling. The core of the book walks you through the steps needed to develop, test, and deploy a web application with Docker. Get started with Docker by building and deploying a simple web application Use Continuous Deployment techniques to push your application to production multiple times a day Learn various options and techniques for logging and monitoring multiple containers Examine networking and service discovery: how do containers find each other and how do you connect them? Orchestrate and cluster containers to address load-balancing, scaling, failover, and scheduling Secure your system by following the principles of defense-in-depth and least privilege",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781491915929"
          },
          {
            "type": "ISBN_10",
            "identifier": "1491915927"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 354,
        "printType": "BOOK",
        "categories": [
          "COMPUTERS"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.3.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=wpYpCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=wpYpCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=wpYpCwAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=wpYpCwAAQBAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Using_Docker.html?hl=&id=wpYpCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=wpYpCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With this hands-on guide, you’ll learn why containers are so important, what you’ll gain by adopting Docker, and how to make it part of your development process."
      }
    },
    {
      "kind": "books#volume",
      "id": "XbXjCwAAQBAJ",
      "etag": "J+e1veiAlTg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XbXjCwAAQBAJ",
      "volumeInfo": {
        "title": "Securing Docker",
        "authors": [
          "Scott Gallagher"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-03-30",
        "description": "Learn how to secure your Docker environment and keep your environments secure irrespective of the threats out there About This Book Gain confidence in using Docker for containerization without compromising on security This book covers different techniques to help you develop your container security skills It is loaded with practical examples and real-world scenarios to secure your container-based applications Who This Book Is For This book is for developers who wish to use Docker as their testing platform as well as security professionals who are interested in securing Docker containers. You must be familiar with the basics of Docker. What You Will Learn Find out how to secure your Docker hosts and nodes Secure your Docker components Explore different security measures/methods for Linux kernels Install and run the Docker Bench security application Monitor and report security issues Familiarize yourself with third-party tools such as Traffic Authorization, Summon, sVirt, and SELinux to secure your Docker environment In Detail With the rising integration and adoption of Docker containers, there is a growing need to ensure their security. The purpose of this book is to provide techniques and enhance your skills to secure Docker containers easily and efficiently. The book starts by sharing the techniques to configure Docker components securely and explore the different security measures/methods one can use to secure the kernel. Furthermore, we will cover the best practices to report Docker security findings and will show you how you can safely report any security findings you come across. Toward the end, we list the internal and third-party tools that can help you immunize your Docker environment. By the end of this book, you will have a complete understanding of Docker security so you are able to protect your container-based applications. Style and approach This book is your one-stop solution to resolve all your Docker security concerns. It will familiarize you with techniques to safeguard your applications that run on Docker containers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785881961"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785881965"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 126,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.3.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XbXjCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XbXjCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=XbXjCwAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=XbXjCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-XbXjCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=XbXjCwAAQBAJ&rdid=book-XbXjCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=XbXjCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Learn how to secure your Docker environment and keep your environments secure irrespective of the threats out there About This Book Gain confidence in using Docker for containerization without compromising on security This book covers ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "MD3lCwAAQBAJ",
      "etag": "Kv32JTg0wkc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/MD3lCwAAQBAJ",
      "volumeInfo": {
        "title": "Monitoring Docker",
        "authors": [
          "Russ McKendrick"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-12-15",
        "description": "Monitor your Docker containers and their apps using various native and third-party tools with the help of this exclusive guide! About This Book Get the only book that covers multiple methods to monitoring Docker Containers -your one-stop solution to all your Docker monitoring needs Learn how to implement third-party tools such as Datalog, cAdvisor, and more with this example-rich, hands-on guide Learn how to efficiently monitor Docker containers and get an edge over other administrators while maintaining apps on these containers Who This Book Is For This book is for DevOps engineers and system administrators who manage Docker containers and want to better manage these containers using expert techniques and methods and better maintain applications built on Docker. What You Will Learn Discover the tools built into Docker to gain an insight into your containers' performance Augment Docker's built-in tools with modern tools such as cAdvisor from Google, SysDig by Draios, and Soundcloud's Prometheus Integrate the monitoring of your containers with more traditional monitoring solutions such as Zabbix Take advantage of the various SaaS offerings from third parties to move monitoring away from your local infrastructure and into the cloud Discover the various ways to ship your applications' logs from the container to a central logging service Get the most out of your application and resources with the right implementation of your monitoring method In Detail This book will show you how monitoring containers and keeping a keen eye on the working of applications helps improve the overall performance of the applications that run on Docker. With the increased adoption of Docker containers, the need to monitor which containers are running, what resources they are consuming, and how these factors affect the overall performance of the system has become the need of the moment. This book covers monitoring containers using Docker's native monitoring functions, various plugins, as well as third-party tools that help in monitoring. Well start with how to obtain detailed stats for active containers, resources consumed, and container behavior. We also show you how to use these stats to improve the overall performance of the system. Next, you will learn how to use SysDig to both view your containers performance metrics in real time and record sessions to query later. By the end of this book, you will have a complete knowledge of how to implement monitoring for your containerized applications and make the most of the metrics you are collecting Style and approach This is an easy-to-follow guide with plenty of hands-on examples that can be executed both on your local machine and externally hosted services.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785885501"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785885502"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 148,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=MD3lCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=MD3lCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=MD3lCwAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=MD3lCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-MD3lCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=MD3lCwAAQBAJ&rdid=book-MD3lCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=MD3lCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "About This Book Get the only book that covers multiple methods to monitoring Docker Containers -your one-stop solution to all your Docker monitoring needs Learn how to implement third-party tools such as Datalog, cAdvisor, and more with ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "tMnBDQAAQBAJ",
      "etag": "4yHV8pgoKr4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tMnBDQAAQBAJ",
      "volumeInfo": {
        "title": "Deploying Rails with Docker, Kubernetes and ECS",
        "authors": [
          "Pablo Acuña"
        ],
        "publisher": "Apress",
        "publishedDate": "2016-12-19",
        "description": "Learn how to use the power of Docker and Kubernetes to deploy your Rails applications easily and efficiently. Deploying Rails with Docker, Kubernetes and ECS shows you how to set up the project, push it to DockerHub, manage services and set up an efficient continuous integration environment. Every concept is clearly explained alongside a full Ruby on Rails application deployment. You’ll also learn how to deploy via Docker using Amazon EC2 Container Service. Docker and Kubernetes are increasing in popularity every day, but what if you want to leverage their benefits for your Rails application? This is the quick guide you need. What You Will Learn Create a Rails API application using Rails 5 and PostgreSQL, and Dockerize it Write and test templates to run the application with Kubernetes Create a Kubernetes cluster in Amazon Web Services and run your Inspect and troubleshoot problems in the cluster Automatize the the whole deployment process with Jenkins Who This Book Is For This book is for anyone who wants to understand how to effectively deploy a Rails application using Docker and Kubernetes. You will need to understand Rails and have basic knowledge of what Docker and Kubernetes are used for.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781484224151"
          },
          {
            "type": "ISBN_10",
            "identifier": "1484224159"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 127,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=tMnBDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=tMnBDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=tMnBDQAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=6&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=tMnBDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-tMnBDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 24.19,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 22.98,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=tMnBDQAAQBAJ&rdid=book-tMnBDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.419E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.298E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Deploying_Rails_with_Docker_Kubernetes_a-sample-epub.acsm?id=tMnBDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Deploying_Rails_with_Docker_Kubernetes_a-sample-pdf.acsm?id=tMnBDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=tMnBDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This is the book you need. Deploying Rails with Docker, Kubernetes and ECS shows you how to set up the project, push it to DockerHub, manage services and set up an efficient continuous integration environment."
      }
    },
    {
      "kind": "books#volume",
      "id": "4xQKBAAAQBAJ",
      "etag": "Xx6lGLv/IFA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/4xQKBAAAQBAJ",
      "volumeInfo": {
        "title": "The Docker Book",
        "subtitle": "Containerization is the new virtualization",
        "authors": [
          "James Turnbull"
        ],
        "publisher": "James Turnbull",
        "publishedDate": "2014-07-14",
        "description": "Updated for Docker Community Edition v17.03.0! Docker book designed for SysAdmins, Operations staff, Developers and DevOps who are interested in deploying the open source container service Docker. In this book, we'll walk you through installing, deploying, managing, and extending Docker. We're going to do that by first introducing you to the basics of Docker and its components. Then we'll start to use Docker to build containers and services to perform a variety of tasks. We're going to take you through the development life cycle, from testing to production, and see where Docker fits in and how it can make your life easier. We'll make use of Docker to build test environments for new projects, demonstrate how to integrate Docker with continuous integration workflow, and then how to build application services and platforms. Finally, we'll show you how to use Docker's API and how to extend Docker yourself. We'll teach you how to: * Install Docker. * Take your first steps with a Docker container. * Build Docker images. * Manage and share Docker images. * Run and manage more complex Docker containers. * Deploy Docker containers as part of your testing pipeline. * Build multi-container applications and environments. * Learn about orchestration using Compose and Swarm for the orchestration of Docker containers and Consul for service discovery. * Explore the Docker API. * Getting Help and Extending Docker.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780988820203"
          },
          {
            "type": "ISBN_10",
            "identifier": "098882020X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 342,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4.0,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "4.60.61.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=4xQKBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=4xQKBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=4xQKBAAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=4xQKBAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-4xQKBAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 10.94,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 10.39,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=4xQKBAAAQBAJ&rdid=book-4xQKBAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.094E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.039E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=4xQKBAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In this book, we&#39;ll walk you through installing, deploying, managing, and extending Docker. We&#39;re going to do that by first introducing you to the basics of Docker and its components."
      }
    },
    {
      "kind": "books#volume",
      "id": "L08IrgEACAAJ",
      "etag": "cJuswEjxELs",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/L08IrgEACAAJ",
      "volumeInfo": {
        "title": "Docker Containers",
        "subtitle": "From Start to Enterprise",
        "authors": [
          "Christopher Negus"
        ],
        "publisher": "Addison-Wesley Professional",
        "publishedDate": "2015-09-01",
        "description": "The Practical Guide to Running Docker on Linux Systems or Cloud Environments Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy, and manage your most critical applications. In Doc ker Containers , Christopher Negus helps you master Docker containerization from the ground up. You'll start out running a few Docker container images in Ubuntu, Fedora, RHEL, CoreOS, or Project Atomic. By the time you've finished, you'll be deploying enterprise-quality, multi-container Kubernetes setups in modern Linux and cloud environments. Writing for system administrators, software developers, and technology enthusiasts, Negus touches on every aspect of working with Docker: setting up containerized applications, working with both individual and multiple containers, running containers in cloud environments, and developing containers. Teaching through realistic examples of desktop applications, system services, and games, Negus guides you through building and deploying your own Dockerized applications. As you build your expertise, you'll also learn indispensable Docker best practices for building and integrating containers, managing Docker on a day-to-day basis, and much more: * Understanding what Docker is and what you can do with it * Installing Docker on standard Linux or specialized container operating systems such as Atomic Host and CoreOS * Setting up a container runtime environment and private Docker Registry * Creating, running, and investigating Docker images and containers * Finding, pulling, saving, loading, and tagging container images * Pulling and pushing containers between local systems and Docker Registries * Integrating Docker containers with host networking and storage * Building containers with the docker build command and Dockerfile files * Minimizing space consumption and erasing unneeded containers * Accessing special host privileges from within a container * Orchestrating multiple containers into complex applications with Kubernetes * Using super privileged containers in cloud environments * Managing containers in the cloud with Cockpit * Getting started with Docker container development * Learning container build techniques from shared Dockerfiles This book is part of the Pearson Content Update Program. As the technology changes, sections of this book will be updated or new sections will be added. The updates will be delivered to you via a free Web Edition of this book, which can be accessed with any Internet connection.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "013413656X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780134136561"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 350,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=L08IrgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=L08IrgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Docker_Containers.html?hl=&id=L08IrgEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=L08IrgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&quot;Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy and manage your most critical applications. In Docker Containers, Christopher Negus helps you master Docker containerization from the ground up ."
      }
    },
    {
      "kind": "books#volume",
      "id": "-zrcCQAAQBAJ",
      "etag": "+dWD57AXcmo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-zrcCQAAQBAJ",
      "volumeInfo": {
        "title": "Docker: Up & Running",
        "subtitle": "Shipping Reliable Containers in Production",
        "authors": [
          "Karl Matthias",
          "Sean P. Kane"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2015-06-11",
        "description": "Updated to cover Docker version 1.10 Docker is quickly changing the way that organizations are deploying software at scale. But understanding how Linux containers fit into your workflow—and getting the integration details right—are not trivial tasks. With this practical guide, you’ll learn how to use Docker to package your applications with all of their dependencies, and then test, ship, scale, and support your containers in production. Two Lead Site Reliability Engineers at New Relic share much of what they have learned from using Docker in production since shortly after its initial release. Their goal is to help you reap the benefits of this technology while avoiding the many setbacks they experienced. Learn how Docker simplifies dependency management and deployment workflow for your applications Start working with Docker images, containers, and command line tools Use practical techniques to deploy and test Docker-based Linux containers in production Debug containers by understanding their composition and internal processes Deploy production containers at scale inside your data center or cloud environment Explore advanced Docker topics, including deployment tools, networking, orchestration, security, and configuration",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781491918517"
          },
          {
            "type": "ISBN_10",
            "identifier": "1491918519"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 232,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.6.7.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-zrcCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-zrcCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=-zrcCQAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=-zrcCQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book--zrcCQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 32.67,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 31.04,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=-zrcCQAAQBAJ&rdid=book--zrcCQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.267E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.104E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=-zrcCQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With this practical guide, you’ll learn how to use Docker to package your applications with all of their dependencies, and then test, ship, scale, and support your containers in production."
      }
    },
    {
      "kind": "books#volume",
      "id": "Lt_BsgEACAAJ",
      "etag": "S29T3IPLbN4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Lt_BsgEACAAJ",
      "volumeInfo": {
        "title": "Docker in Action",
        "authors": [
          "Jeff Nickoloff"
        ],
        "publisher": "Manning Publications",
        "publishedDate": "2016-03-22",
        "description": "Summary Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology The idea behind Docker is simple. Create a tiny virtual environment, called a container, that holds just your application and its dependencies. The Docker engine uses the host operating system to build and account for these containers. They are easy to install, manage, and remove. Applications running inside containers share resources, making their footprints small. About the Book Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers. After starting with a clear explanation of the Docker model, you will learn how to package applications in containers, including techniques for testing and distributing applications. You will also learn how to run programs securely and how to manage shared resources. Using carefully designed examples, the book teaches you how to orchestrate containers and applications from installation to removal. Along the way, you'll discover techniques for using Docker on systems ranging from dev-and-test machines to full-scale cloud deployments. What's Inside Packaging containers for deployment Installing, managing, and removing containers Working with Docker images Distributing with DockerHub About the Reader Readers need only have a working knowledge of the Linux OS. No prior knowledge of Docker is assumed. About the Author Jeff Nickoloff, a software engineer, has presented Docker and its applications to hundreds of developers and administrators at Desert Code Camp, Amazon.com, and technology meetups. Table of Contents PART 1 KEEPING A TIDY COMPUTER Welcome to Docker Running software in containers Software installation simplified Persistent storage and shared state with volumes Network exposure Limiting risk with isolation PART 2 PACKAGING SOFTWARE FOR DISTRIBUTION Packaging software in images Build automation and advanced image considerations Public and private software distribution Running customized registries PART 3 MULTI-CONTAINER AND MULTI-HOST ENVIRONMENTS Declarative environments with Docker Clusters with Machine and Swarm",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1633430235"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781633430235"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Application software"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Lt_BsgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Lt_BsgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Lt_BsgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=Lt_BsgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Docker_in_Action.html?hl=&id=Lt_BsgEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Lt_BsgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Applications running inside containers share resources, making their footprints small. About the Book Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers."
      }
    },
    {
      "kind": "books#volume",
      "id": "Q00FswEACAAJ",
      "etag": "ZcMXBM/Xg5w",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Q00FswEACAAJ",
      "volumeInfo": {
        "title": "Docker in Practice",
        "authors": [
          "Ian Miell",
          "Aidan Hobson Sayers"
        ],
        "publishedDate": "2016-01-31",
        "description": "Docker is impossible to ignore. This lightweight container system is easier to deploy and more flexible than traditional VMs. Built for simplicity and speed, it radically reduces your reliance on manual system administration for tasks like configuring servers, creating disposable (and portable!) development environments, and predictably rolling out applications on unknown systems. While the idea behind Docker is simple, it can have a major impact on how software is developed and deployed. Docker in Practice is a hands-on guide to over 100 specific techniques that can be used to get the most out of Docker. Following a cookbook-style Problem/Solution/Discussion format, this practical handbook offers instantly-useful solutions for important areas like effortless server maintenance and configuration, deploying microservices, creating safe environments for experimentation, and much more. The book takes readers from Docker basics to must-have practices like integrating Docker with Continuous Integration process, automating complex container creation with Chef, and orchestration with Kubernetes. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1617292729"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781617292729"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 275,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Q00FswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Q00FswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Q00FswEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=11&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=Q00FswEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Docker_in_Practice.html?hl=&id=Q00FswEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Q00FswEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "About the Book Docker in Practice is a hands-on guide that covers 101 specific techniques you can use to get the most out of Docker."
      }
    },
    {
      "kind": "books#volume",
      "id": "aEvZDQAAQBAJ",
      "etag": "wl26QTVULAI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/aEvZDQAAQBAJ",
      "volumeInfo": {
        "title": "Docker: Creating Structured Containers",
        "authors": [
          "Pethuru Raj",
          "Jeeva S. Chelladhurai",
          "Vinod Singh",
          "Shrikrishna Holla",
          "Oskar Hane",
          "Neependra Khare",
          "Rajdeep Dua",
          "Vaibhav Kohli",
          "Santosh Kumar Konduri",
          "Russ McKendrick"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-06-13",
        "description": "Become an expert in the innovative containerization tool to unlock new opportunities in the way you use and deploy software About This Book Harness the power of Docker to create a robust and resilient environment in which you can generate portable, composable, scalable, and stable application containers Learn the art of container networking with elevated efficiency using Docker Better manage Docker containers using expert techniques and methods Explore the ways to keep your Docker environment secure Deploy your applications easily Who This Book Is For Whether you are a developer or a sysadmin, or anything in between, this course will give you the guidance you need to use Docker to build, test, and deploy your applications and make them easier, even enjoyable. What You Will Learn Learn how to install Docker across all the platforms along with a few troubleshooting techniques Build, push, and publish images on Docker Hub Orchestrate multiple containers with Docker Compose Test and debug applications inside a Docker container Get to know the basics of networking and see how Docker networking works Discover the tools built into Docker to gain an insight into your container's performance Take advantage of the various SaaS offerings from third parties to move monitoring away from your local infrastructure and into the cloud Familiarize yourself with third-party tools such as Traffic Authorization, Summon, sVirt, and SELinux to secure your Docker environment Integrate Docker with a wide range of cloud and configuration tools to fully realize its potential In Detail So hot off the presses, the latest buzz that has been on the tip of everyone's tongues and the topic of almost any conversation that includes containers these days is Docker! Docker has been a game-changer when it comes to virtualization. With this course, you will go from just being the person in the office who hears that buzz to the one who is tooting it around every day. This course will be a smooth journey covering Docker from scratch to finish! The first module will help you get familiarized with the fundamentals of Docker. The second module will show you how to create, deploy, and manage a virtual network for connecting containers spanning single or multiple hosts. In the third module, you'll get to grips with monitoring your Docker apps and containers - this will show you how monitoring containers and keeping a keen eye on the working of applications helps improve the overall performance of the applications that run on Docker. The purpose of our fourth module, Securing Docker, is to provide techniques and enhance your skills to secure Docker containers easily and efficiently. Finally, you'll see how to deploy Docker in production and three interesting GUI applications: Shipyard, Panamax, and Tutum. Style and approach Covering best practices to make sure you're confident with the basics, such as building, managing, and storing containers, before diving deeper into Docker security, you'll find everything you need to help you extend and integrate Docker in new and innovative ways.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781786463012"
          },
          {
            "type": "ISBN_10",
            "identifier": "1786463016"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 820,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=aEvZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=aEvZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=aEvZDQAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=12&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=aEvZDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-aEvZDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 62.91,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 59.76,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=aEvZDQAAQBAJ&rdid=book-aEvZDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 6.291E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 5.976E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=aEvZDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Become an expert in the innovative containerization tool to unlock new opportunities in the way you use and deploy software About This Book Harness the power of Docker to create a robust and resilient environment in which you can generate ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "e3AmjwEACAAJ",
      "etag": "RjAxy5bNprM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/e3AmjwEACAAJ",
      "volumeInfo": {
        "title": "Docker",
        "subtitle": "professionell einsetzen. Für Entwickler, Admins und DevOps",
        "authors": [
          "Tobias Gesellchen"
        ],
        "publishedDate": "2016-05-30",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "3836239760"
          },
          {
            "type": "ISBN_13",
            "identifier": "9783836239769"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 420,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "language": "de",
        "previewLink": "http://books.google.es/books?id=e3AmjwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=13&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=e3AmjwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Docker.html?hl=&id=e3AmjwEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=e3AmjwEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "efzijgEACAAJ",
      "etag": "WEtkcLtKuFA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/efzijgEACAAJ",
      "volumeInfo": {
        "title": "Pro Docker",
        "authors": [
          "Deepak Vohra"
        ],
        "publisher": "Apress",
        "publishedDate": "2015-12-27",
        "description": "In this fast-paced book on the Docker open standards platform for developing, packaging and running portable distributed applications, Deepak Vorhadiscusses how to build, ship and run applications on any platform such as a PC, the cloud, data center or a virtual machine. He describes how to install and create Docker images. and the advantages off Docker containers.The remainder of the book is devoted to discussing using Docker with important software solutions. He begins by discussing using Docker with a traditional RDBMS using Oracle and MySQL. Next he moves on to NoSQL with chapter on MongoDB Cassandra, and Couchbase. Then he addresses the use of Docker in the Hadoop ecosystem with complete chapters on utilizing not only Hadoop, but Hive, HBase, Sqoop, Kafka, Solr and Spark. What You Will Learn How to install a Docker image How to create a Docker container How to run an Application in a Docker Container Use Docker with Apache Hadoop Ecosystem Use Docker with NoSQL Databases Use Docker with RDBMS Who This Book Is ForApache Hadoop Developers. Database developers. NoSQL Developers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1484218299"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781484218297"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 256,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=efzijgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=efzijgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=efzijgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=14&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=efzijgEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Pro_Docker.html?hl=&id=efzijgEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=efzijgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In this fast-paced book on the Docker open standards platform for developing, packaging and running portable distributed applications, Deepak Vorhadiscusses how to build, ship and run applications on any platform such as a PC, the cloud, ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "tFj7DAAAQBAJ",
      "etag": "GXU5BWB59lE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tFj7DAAAQBAJ",
      "volumeInfo": {
        "title": "Docker",
        "subtitle": "Pratique des architectures à base de conteneurs",
        "authors": [
          "Pierre-Yves Cloux",
          "Thomas Garlot",
          "Johann Kohler"
        ],
        "publisher": "Dunod",
        "publishedDate": "2016-09-07",
        "description": "Docker est une technologie open source qui a pour but de faciliter le déploiement d'une application ainsi que la gestion de l'infrastructure sous-jacente. L'application est embarquée dans un conteneur virtuel qui pourra s'exécuter sur n'importe quel serveur (Linux ou Windows). Le but de cet ouvrage est d'offrir une approche pratique à Docker et à l'écosystème technologique qui l'accompagne. Autour du Docker Engine qui exécute les conteneurs il existe plusieurs outils complémentaires pour conditionner, assembler et orchestrer les applications (CoreOS, Apache Mesos, RKT, Kubernetes...).",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9782100753505"
          },
          {
            "type": "ISBN_10",
            "identifier": "2100753509"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=tFj7DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=tFj7DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.es/books?id=tFj7DAAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=15&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=tFj7DAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-tFj7DAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 21.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 21.99,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=tFj7DAAAQBAJ&rdid=book-tFj7DAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.199E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.199E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker-sample-pdf.acsm?id=tFj7DAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=tFj7DAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker est une technologie open source qui a pour but de faciliter le déploiement d&#39;une application ainsi que la gestion de l&#39;infrastructure sous-jacente."
      }
    },
    {
      "kind": "books#volume",
      "id": "6xnkDAAAQBAJ",
      "etag": "7U/Q6FRfFk8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6xnkDAAAQBAJ",
      "volumeInfo": {
        "title": "Descomplicando o Docker",
        "subtitle": "",
        "authors": [
          "Jeferson Fernando Noronha Vitalino",
          "Marcus André Nunes Castro"
        ],
        "publisher": "Brasport",
        "publishedDate": "2016-08-17",
        "description": "DON’T PANIC! O assunto é bem mais fácil do que parece. :) Você se interessou por esse negócio de containers, porém ainda tem dificuldade de assimilar algum conceito? Está buscando aprender? Neste livro você irá entender na prática como utilizar containers Docker de uma forma que (realmente) esperamos que seja divertida! Haverá muitas explicações, analogias, exemplos, tudo para que você consiga dominar o Docker e a utilização de containers de forma efetiva. Então, para você que é desenvolvedor, o Docker vai proporcionar maior autonomia e flexibilidade – e principalmente a compatibilidade vai deixar tudo mais fácil para que você faça o que gosta e ainda é pago para fazer: “codar”! Se você trabalha em operações, chega de perder horas configurando um servidor de aplicação e quebrando a cabeça pensando em como escalar seu ambiente de maneira fácil, rápida e que não custe os olhos da cara.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788574527970"
          },
          {
            "type": "ISBN_10",
            "identifier": "8574527971"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 120,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=6xnkDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=6xnkDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt",
        "previewLink": "http://books.google.es/books?id=6xnkDAAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=16&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=6xnkDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-6xnkDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 11.36,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 10.79,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=6xnkDAAAQBAJ&rdid=book-6xnkDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.136E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.079E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Descomplicando_o_Docker-sample-epub.acsm?id=6xnkDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Descomplicando_o_Docker-sample-pdf.acsm?id=6xnkDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=6xnkDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "DON’T PANIC!"
      }
    },
    {
      "kind": "books#volume",
      "id": "5JjmDAAAQBAJ",
      "etag": "2inNKuHERMU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/5JjmDAAAQBAJ",
      "volumeInfo": {
        "title": "Docker Praxiseinstieg",
        "subtitle": "Deployment, Testen und Debugging von Containern in Produktivumgebungen",
        "authors": [
          "Sean P. Kane",
          "Matthias Karl"
        ],
        "publisher": "MITP-Verlags GmbH & Co. KG",
        "publishedDate": "2016-08-25",
        "description": "Docker-Images und -Container verwenden Container deployen und debuggen Einsatz von Tools: Docker Swarm, Centurion, Amazon EC2 Container Services Linux-Container besitzen das Potenzial, das Deployment von Applikationen für verschiedene Umgebungen stark zu verändern. Dieses Buch weist Ihnen den Weg zu einer funktionierenden Docker-Umgebung. Die Autoren zeigen Ihnen, wie Sie Docker-Images Ihrer Anwendungen inklusive aller Abhängigkeiten erstellen, wie Sie diese testen, deployen und skalieren können, und wie Sie die Container in der Produktivumgebung pflegen und warten. Dabei kommen Themen wie die Einrichtung, das Testen und das Deployment von Docker-Anwendungen ebenso zur Sprache wie das Debugging eines laufenden Systems. Mit diesem Buch werden Sie verstehen, was Docker wirklich leistet, welche Relevanz es hat, wie Sie es zum Laufen bekommen, wie Sie damit Ihre Anwendungen deployen können und was erforderlich ist, um es in einer Produktivumgebung einzusetzen. Die Autoren dieses Buches sind in dem Unternehmen New Relic für die Sicherstellung der Stabilität der dort entwickelten Anwendungen zuständig und lassen Sie an ihren im praktischen Umgang mit Docker gesammelten Erfahrungen teilhaben. Ihre Zielsetzung lautet, Sie von ihren Erkenntnissen profitieren zu lassen und davor zu bewahren, dieselben Rückschläge hinnehmen zu müssen, die den Autoren in diesem Kontext widerfahren sind.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783958454095"
          },
          {
            "type": "ISBN_10",
            "identifier": "3958454097"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 276,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=5JjmDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=5JjmDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.es/books?id=5JjmDAAAQBAJ&printsec=frontcover&dq=intitle:%22docker%22+subject:Computers&hl=&cd=17&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=5JjmDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-5JjmDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 25.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 24.69,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=5JjmDAAAQBAJ&rdid=book-5JjmDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.599E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.469E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Praxiseinstieg-sample-epub.acsm?id=5JjmDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Praxiseinstieg-sample-pdf.acsm?id=5JjmDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=5JjmDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker-Images und -Container verwenden Container deployen und debuggen Einsatz von Tools: Docker Swarm, Centurion, Amazon EC2 Container Services Linux-Container besitzen das Potenzial, das Deployment von Applikationen für verschiedene ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "F0VrjwEACAAJ",
      "etag": "urNPGM5Lq0g",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/F0VrjwEACAAJ",
      "volumeInfo": {
        "title": "Kubernetes Microservices with Docker",
        "authors": [
          "Deepak Vohra"
        ],
        "publisher": "Apress",
        "publishedDate": "2016-04-16",
        "description": "This book on Kubernetes, the container cluster manager, discusses all aspects of using Kubernetes in today's complex big data and enterprise applications, including Docker containers. Starting with installing Kubernetes on a single node, the book introduces Kubernetes with a simple Hello example and discusses using environment variables in Kubernetes. Next, the book discusses using Kubernetes with all major groups of technologies such as relational databases, NoSQL databases, and in the Apache Hadoop ecosystem. The book concludes with using multi container Pods and installing Kubernetes on a multi node cluster. No other book on using Kubernetes - beyond simple introduction - is available in the market. What You Will Learn How to install Kubernetes on a single node How to install Kubernetes on a multi-node cluster How to set environment variables How to create a multi-container pods using Docker How to use volumes How to use Kubernetes with Apache Hadoop Ecosystem How to use Kubernetes with NoSQL Databases How to use Kubernetes with RDBMS Who This Book Is ForApplication Developers including Apache Hadoop Developers, Database developers and NoSQL Developers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1484219066"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781484219065"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 432,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=F0VrjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=F0VrjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=F0VrjwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=18&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=F0VrjwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Kubernetes_Microservices_with_Docker.html?hl=&id=F0VrjwEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=F0VrjwEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The book is about Kubernetes, a container cluster manager. The book discusses all aspects of using Kubernetes in applications."
      }
    },
    {
      "kind": "books#volume",
      "id": "cWt4jwEACAAJ",
      "etag": "TwGGA5/4G7Y",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/cWt4jwEACAAJ",
      "volumeInfo": {
        "title": "Microservices with Docker on Microsoft Azure (includes Content Update Program)",
        "authors": [
          "Boris Scholl",
          "Trent Swanson",
          "Daniel Fernandez"
        ],
        "publishedDate": "2016-05-29",
        "description": "Microservices and Docker on Microsoft Azure Unleashed is for anyone who wants to learn how to build microservices-based applications on Azure. Readers can expect to come away with a solid understanding of both the benefits and challenges of microservices based applications. Readers will gain knowledge that can then be applied to designing microservices-based applications on Azure from the ground up, or to deconstruct an existing monolithic application into microservices over time. The authors, all subject matter experts, participated in the design and implementation of many of these features and have worked on many internal Microsoft product development teams, such as Azure DB, Skype, and Cortana- groups which have been successfully using microservices architectures for years. They have invaluable experience and perspective when it comes to the considerations and challenges a developer has to consider for designing and building microservices-based applications. Readers can expect to learn: The difference between microservices-based applications and traditional monolithic applications, and the pros and cons for each approach About Docker containers in the context of microservices architectures, about basic Docker operations, and about how to create Docker hosts on Azure Best practices for setting up development and dev-ops environments for microservices-based applications Cluster and container orchestration capabilities on Azure Scenarios for monitoring containerized microservices applications and monitoring tools available on Azure How Azure Service Fabric enables developers to develop microservices-based applications An extensive sample application demonstrating the microservices concepts discussed throughout the book is included.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0672337495"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780672337499"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 600,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=cWt4jwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=cWt4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=cWt4jwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=19&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=cWt4jwEACAAJ&dq=intitle:%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Microservices_with_Docker_on_Microsoft_A.html?hl=&id=cWt4jwEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=cWt4jwEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Book + Content Update Program &quot;Beyond just describing the basics, this book dives into best practices every aspiring microservices developer or architect should know."
      }
    },
    {
      "kind": "books#volume",
      "id": "SFUrDQAAQBAJ",
      "etag": "m19KqS8dGUE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/SFUrDQAAQBAJ",
      "volumeInfo": {
        "title": "Docker",
        "subtitle": "Software entwickeln und deployen mit Containern",
        "authors": [
          "Adrian Mouat"
        ],
        "publisher": "dpunkt.verlag",
        "publishedDate": "2016-09-30",
        "description": "Docker-Container bieten eine einfache, schnelle und robuste Möglichkeit, Software zu entwickeln, zu verteilen und laufen zu lassen – besonders in dynamischen und verteilten Umgebungen. Mit diesem praktischen Leitfaden lernen Sie, warum Container so wichtig sind, was durch den Einsatz von Docker möglich ist und wie Sie es in Ihren Entwicklungsprozess einbinden. Dieses Buch ist aktuell zu Docker 1.12 und ideal für Entwickler, Operations-Techniker und Administratoren – insbesondere, wenn Sie einen DevOps-Ansatz verfolgen. Es nimmt Sie mit auf eine Reise von den Grundlagen bis zum Ausführen Dutzender Container auf einem Multi-Host-System mit Networking und Scheduling. Im Verlauf des Buches erfahren Sie, welche Schritte zum Entwickeln, Testen und Bereitstellen einer Webanwendung mit Docker notwendig sind. • Beginnen Sie mit Docker, indem Sie eine einfache Webanwendung entwickeln und bereitstellen. • Nutzen Sie Techniken aus dem Continuous Deployment, um Ihre Anwendung mehrmals pro Tag in die Produktivumgebung zu bringen. • Lernen Sie Optionen und Techniken kennen, um mehrere Container gleichzeitig zu protokollieren und zu überwachen. • Befassen Sie sich mit dem Erkennen im Netzwerk und mit Services: Wie finden sich Container gegenseitig und wie verbinden Sie sie? • Orchestrieren und clustern Sie Container, um Load Balancing zu ermöglichen, Ihr System skalierbar zu machen sowie Failovers und Scheduling umzusetzen. • Sichern Sie Ihr System, indem Sie den Prinzipien der »Defense in Depth« und dem Konzept der geringsten Rechte folgen. • Setzen Sie Container ein, um eine Microservices-Architektur aufzubauen.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783960880370"
          },
          {
            "type": "ISBN_10",
            "identifier": "3960880375"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 368,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.3.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=SFUrDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=SFUrDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.es/books?id=SFUrDQAAQBAJ&dq=intitle:%22docker%22+subject:Computers&hl=&cd=20&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=SFUrDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-SFUrDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 29.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 29.99,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=SFUrDQAAQBAJ&rdid=book-SFUrDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.999E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.999E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=SFUrDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker-Container bieten eine einfache, schnelle und robuste Möglichkeit, Software zu entwickeln, zu verteilen und laufen zu lassen – besonders in dynamischen und verteilten Umgebungen."
      }
    }
];


export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESPONSE:
      if (!action.payload.books) {
        return [];
      }
      return action.payload.books;
    default:
      return state;
  }
}