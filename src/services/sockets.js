import io from 'socket.io-client';

const socket = io('https://lanzar-dados-back.herokuapp.com/', {
    transports: ['websocket'],
    secure: true,
});

export default socket;