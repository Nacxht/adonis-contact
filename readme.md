# Contact App (AdonisJS)


A simple project that I made while learning the AdonisJS framework, and... yeah, its Contact App (again), and this project is very simple. This project isn't even responsive, I just rely on Flowbite and DaisyUI for the web display (I don't know if combining Flowbite and DaisyUI is a good idea). \
`Don't hesitate to give criticism and suggestions, because it can help me to improve.`
 \
`Note: I use 67x zoom in my web browser (I use firefox).`




## Installation

- Clone this project
```bash
    git clone https://github.com/Nacxht/pengaduan-masyarakat.git
```

- Go to the project directory
```bash
    cd adonis-contact
```

- Install the dependencies
```bash
    npm install
```

- Change .env.example to .env \
`After that, change the settings in the ".env" file according to your preferences.`

- Migration
```bash
    node ace migration:run
```

- Seeders
```bash
    node ace db:seed
```

## Development
- Start the server (development)
```bash
    npm run dev
```

- Open your web browser and enter the following address:
```bash
    https://127.0.0.1
```

## Build
- Build the application
```bash
   npm run build
```

- Go to the project directory that has been built. Then run `npm ci --production`
```bash
    cd build
    npm ci --production
```

- Copy your .env file into the build directory \
`
Yea, copy it. And then copy the contents of the variable "MYSQL_HOST" into the variable "HOST" variable. (I don't know whether this is the right step or not, because its works for me, so if I made a mistake, please feel free to give me a correction).
`


- Start the server
```bash
    npm run start
```

- Open your web browser and enter the following address:
```bash
    https://127.0.0.1
```