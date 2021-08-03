const TicketList = require("../models/ticket-list");

class Sockets {
    constructor(io) {
        this.io = io;

        //crear la instanci de nuestro ticketList
        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on("connection", (socket) => {
            console.log("Cliente conectado");

            socket.on("solicitar-ticket", (_, done) => {
                const nuevoTicket = this.ticketList.crearTicket();
                done(nuevoTicket);
            });

            socket.on(
                "siguiente-ticket-trabajar",
                ({ agente, escritorio }, done) => {
                    const suTicket = this.ticketList.asignarTicket(
                        agente,
                        escritorio
                    );
                    done(suTicket);

                    this.io.emit("ticket-asignado", this.ticketList.ultimos13);
                }
            );
        });
    }
}

module.exports = Sockets;
