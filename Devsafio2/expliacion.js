


// function paso1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = false; // Cambia esto según tu lógica
//             if (exito) {
//                 console.log("herbir agua");
//                 resolve(); // Resuelve la promesa para indicar éxito
//             } else {
//                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
//             }
//         }, 4000);
//     });
// }

// function paso2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia esto según tu lógica
//             if (exito) {
//                 console.log("poner el te");
//                 resolve(); // Resuelve la promesa para indicar éxito
//             } else {
//                 reject("La tarea ha fallado epicamente"); // Rechaza la promesa en caso de error
//             }
//         }, 1000);
//     });
// }

// const paso3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia esto según tu lógica
//             if (exito) {
//                 console.log("servir");
//                 resolve(); // Resuelve la promesa para indicar éxito
//             } else {
//                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
//             }
//         }, 2000);
//     });
// }

// function paso4() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia esto según tu lógica
//             if (exito) {
//                 console.log("beber");
//                 resolve(); // Resuelve la promesa para indicar éxito
//             } else {
//                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
//             }
//         }, 3000);
//     });
// }

// function paso5() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia esto según tu lógica
//             if (exito) {
//                 console.log("limpiar");
//                 resolve(); // Resuelve la promesa para indicar éxito
//             } else {
//                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
//             }
//         }, 4000);
//     });
// }

// // Uso de las funciones con promesas
// paso1()
//     .then(() => paso2())
//     .then(() => paso3())
//     .then(() => paso4())
//     .then(() => paso5())
//     .catch((error) => {
//         console.error("Ocurrió un error: " + error);
//     });

    // async function paso1() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const exito = true; // Cambia esto según tu lógica
    //             if (exito) {
    //                 console.log("herbir agua");
    //                 resolve(); // Resuelve la promesa para indicar éxito
    //             } else {
    //                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
    //             }
    //         }, 4000);
    //     });
    // }
    
    // async function paso2() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const exito = true; // Cambia esto según tu lógica
    //             if (exito) {
    //                 console.log("poner el te");
    //                 resolve(); // Resuelve la promesa para indicar éxito
    //             } else {
    //                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
    //             }
    //         }, 1000);
    //     });
    // }
    
    // async function paso3() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const exito = true; // Cambia esto según tu lógica
    //             if (exito) {
    //                 console.log("servir");
    //                 resolve(); // Resuelve la promesa para indicar éxito
    //             } else {
    //                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
    //             }
    //         }, 2000);
    //     });
    // }
    
    // async function paso4() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const exito = true; // Cambia esto según tu lógica
    //             if (exito) {
    //                 console.log("beber");
    //                 resolve(); // Resuelve la promesa para indicar éxito
    //             } else {
    //                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
    //             }
    //         }, 3000);
    //     });
    // }
    
    // async function paso5() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const exito = true; // Cambia esto según tu lógica
    //             if (exito) {
    //                 console.log("limpiar");
    //                 resolve(); // Resuelve la promesa para indicar éxito
    //             } else {
    //                 reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
    //             }
    //         }, 4000);
    //     });
    // }
    
    // async function realizarTareas() {
    //     try {
    //         await paso1();
    //         await paso2();
    //         await paso3();
    //         await paso4();
    //         await paso5();
    //         console.log("Todas las tareas se completaron con éxito.");
    //     } catch (error) {
    //         console.error("Ocurrió un error: " + error);
    //     }
    // }
    
    // // Llamar a la función principal
    // realizarTareas();
    async function paso1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambia esto según tu lógica
                if (exito) {
                    console.log("herbir agua");
                    resolve("Paso 1 completado con éxito"); // Resuelve la promesa con un mensaje de éxito
                } else {
                    reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
                }
            }, 4000);
        });
    }
    
    async function paso2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambia esto según tu lógica
                if (exito) {
                    console.log("poner el te");
                    resolve("Paso 2 completado con éxito"); // Resuelve la promesa con un mensaje de éxito
                } else {
                    reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
                }
            }, 1000);
        });
    }
    
    async function paso3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambia esto según tu lógica
                if (exito) {
                    console.log("servir");
                    resolve("Paso 3 completado con éxito"); // Resuelve la promesa con un mensaje de éxito
                } else {
                    reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
                }
            }, 2000);
        });
    }
    
    async function paso4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambia esto según tu lógica
                if (exito) {
                    console.log("beber");
                    resolve("Paso 4 completado con éxito"); // Resuelve la promesa con un mensaje de éxito
                } else {
                    reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
                }
            }, 3000);
        });
    }
    
    async function paso5() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambia esto según tu lógica
                if (exito) {
                    console.log("limpiar");
                    resolve("Paso 5 completado con éxito"); // Resuelve la promesa con un mensaje de éxito
                } else {
                    reject("La tarea ha fallado"); // Rechaza la promesa en caso de error
                }
            }, 4000);
        });
    }
    
    async function realizarTareas() {
        try {
            console.log(await paso1());
            console.log(await paso2());
            console.log(await paso3());
            console.log(await paso4());
            console.log(await paso5());
            console.log("Todas las tareas se completaron con éxito.");
        } catch (error) {
            console.error("Ocurrió un error: " + error);
        }
    }
    
    // Llamar a la función principal
    realizarTareas();
    