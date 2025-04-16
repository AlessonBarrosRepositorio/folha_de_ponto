<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>folha de ponto</title>    
    <script src="envio.js" defer></script>
    <script src="script.js" defer></script>
</head>
<body>
    <div class="principal">
        <div class="cima">
            <div class="relogio">
                <h1>Hora:</h1>
                <div class="horas"></div>
            </div>
        </div>
        <div class="meio">
            <button id="inicio" class="btn inicio" disabled>Cheguei</button>
            <button id="almoco" class="btn inicio" disabled>Almoço</button>
            <button id="voltei" class="btn inicio" disabled>Voltei</button>
            <button id="fui" class="btn inicio" disabled>Fui</button>
        </div>
        <div class="baixo"></div>
    </div>
</body>
</html>