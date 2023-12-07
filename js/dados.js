// Criação de lista de produtos (catalogo) com objetos (caracteristicas de cada produto)
// essa estrura carrega dinamicamentes os produtos na pagina, normalmente isso é feito por um banco de dados
// Array de Objetos (lista com informações dos produtos que possuem varias informações)
// export torna o conteudo do arquivo acessivel em todo o projeto

export const catalogo = [ {
    // a virgula (,) indica que tem mais chaves
    id: 1, 
    nome: "iPhone 15 Pro Max - 256 gb",
    descricao: "O iPhone 15 Pro possui uma tela OLED Super Retina XDR de 6,7 polegadas, proporcionando imagens nítidas e cores vibrantes.Com 128 GB de armazenamento interno, você terá espaço suficiente para aplicativos, fotos, vídeos e muito mais. Equipado com um sistema de câmera avançado, incluindo uma câmera principal de 108 megapixels, oferecendo fotos de alta resolução. A câmera frontal possui 16 megapixels para selfies incríveis. Ele também possui resistência à água e poeira (classificação IP68), suporte para carregamento sem fio MagSafe, e uma bateria de longa duração para manter você conectado durante todo o dia.",
    valor: "de R$ 10.00000",
    promocao: 9000.90,
    imagem: "../img/iphone/produto_01.jpg", //uma string, pois deve se passar a URL do produto (buscar no html)
    categoria: "iPhone",
    home: false

}, // para separar os blocos de cada produto basta usar virgula (,) após o fechamento das chaves {} e abrir novas.

{
    id: 2, 
    nome: "iPhone 14 Pro Max - 128gb",
    descricao: "O iPhone 14 Pro apresenta uma tela OLED Super Retina XDR de 6,1 polegadas, oferecendo cores vibrantes e uma experiência visual imersiva. Com generosos 256 GB de armazenamento interno, você terá espaço de sobra para aplicativos, fotos, vídeos e arquivos. Equipado com um sistema de câmera de alta qualidade, incluindo uma câmera principal de 12 megapixels, proporcionando fotos nítidas e detalhadas. A câmera frontal oferece 12 megapixels para selfies de alta qualidade. O iPhone 14 Pro é resistente à água e poeira (classificação IP68), oferece suporte para carregamento sem fio MagSafe e possui uma bateria de longa duração para manter você conectado durante todo o dia.",
    valor: "de R$ 9.000,00",
    promocao: 7199.90,
    imagem: "../img/iphone/produto_02.jpg", 
    categoria: "iPhone",
    home: false
},

{
    id: 3, 
    nome: "iPhone 14 - 256gb",
    descricao: "O iPhone 14 possui uma tela OLED Liquid Retina de 6,1 polegadas, proporcionando cores vívidas e uma experiência visual imersiva. Com amplos 256 GB de armazenamento interno, você terá espaço de sobra para aplicativos, fotos, vídeos e arquivos. Equipado com uma câmera principal de 12 megapixels que captura fotos nítidas e detalhadas. A câmera frontal também oferece 12 megapixels para selfies de alta qualidade. O iPhone 14 é resistente à água e poeira (classificação IP68), suporta carregamento sem fio MagSafe e possui uma bateria de longa duração para acompanhar seu dia a dia.",
    valor: "de R$ 7.000,00",
    promocao: 5799.90,
    imagem: "../img/iphone/produto_03.jpg", 
    categoria: "iPhone",
    home: false
},

{
    id: 4, 
    nome: "Apple Watch SE - 2°geração",
    descricao: "O Apple Watch SE rastreia uma variedade de atividades físicas, como corrida, ciclismo, natação e muito mais. Ele também monitora a frequência cardíaca, a qualidade do sono e oferece recursos de saúde, como detecção de queda e eletrocardiograma. Capaz de armazenar músicas, aplicativos e dados de atividades. O modelo Apple Watch SE inclui funcionalidade GPS, proporcionando rastreamento preciso de sua localização durante atividades ao ar livre. Além do mais, é resistente à água e adequado para natação.",
    valor: "de R$ 3.000,00",
    promocao: 2699.90,
    imagem: "../img/apple/produto_04.png", 
    categoria: "Apple",
    home: false
},

{
    id: 5, 
    nome: "MacBook Pro - 13 polegadas",
    descricao: "O MacBook Pro 13 é um laptop altamente versátil, ideal para desempenho profissional, criação de conteúdo, navegação na web ou entretenimento. O modelo dispões de um SSD de 1 terabyte (1 TB). A alta capacidade do SSD permite carregamento rápido de aplicativos e transferência eficiente de dados. Possui uma memória RAM de 16 GB, disponibilizando um desempenho multitarefa eficiente e uma experiência de computação suave ao lidar com várias tarefas ao mesmo tempo.",
    valor: "de R$ 5.000,00",
    promocao: 3999.90,
    imagem: "../img/apple/produto_05.jpg", 
    categoria: "Apple",
    home: false
},

{
    id: 6, 
    nome: "Apple iPad - 9°geração",
    descricao: "O Apple iPad de 9ª geração é um tablet versátil adequado para uma ampla variedade de atividades. Ele é útil para tarefas como streaming de vídeo, jogos, uso de aplicativos de produtividade e muito mais. Esse iPad está disponível com armazenamento de 128 GB. O modelo oferece conectividade celular têm a capacidade de usar GPS para fins de navegação, localização e mapeamento. O Apple iPad de 9ª geração não é à prova d'água.",
    valor: "de R$ 3.500,00",
    promocao: 2199.90,
    imagem: "../img/apple/produto_06.jpg",
    categoria: "Apple",
    home: false
}, 

{
    id: 7, 
    nome: "Caixa de Som - Flip Essential",
    descricao: "A Caixa de Som Bluetooth JBL Flip Essential 2 de 20W oferece transmissão sem fio via Bluetooth para uma conectividade fácil. Com uma bateria que proporciona até 10 horas de reprodução. Sua classificação IPX7 a torna à prova d'água, permitindo uso em ambientes úmidos. Além disso, seus materiais de tecido durável garantem resistência e durabilidade. Devido seu radiador de graves JBL o modelo oferece um potente som.",
    valor: "de R$ 600,00",
    promocao: 499.90,
    imagem: "../img/jbl/produto_07.jpg",
    categoria: "JBL",
    home: false
},

{
    id: 8, 
    nome: "Headset - Tune 510BT",
    descricao: "O JBL Headset Tune 510BT oferece uma experiência sonora incrível com graves profundos e agudos nítidos graças ao renomado som JBL Pure Bass. Sua conectividade Bluetooth 5.0 permite transmissão de alta qualidade e a capacidade de alternar entre dois dispositivos. Com uma faixa de resposta de frequência de 20 Hz a 20 kHz, garante detalhes musicais. A bateria de até 40 horas de reprodução sem fio, recarregável via USB tipo C em menos de 2 horas, proporciona conveniência. Os botões no fone facilitam o controle do som e chamadas, e você pode ativar o assistente de voz (Siri ou Hey Google) com um toque no botão multifuncional.",
    valor: "de R$ 300,00",
    promocao: 249.90,
    imagem: "../img/jbl/produto_08.jpg",
    categoria: "JBL",
    home: false
},

{
    id: 9, 
    nome: "Headset - Tune 510BT",
    descricao: "Os fones de ouvido JBL Wave Flex TWS oferecem som JBL Deep Bass, até 32 horas de bateria (8 no fone e 24 no estojo), controle touch, resistência a poeira e respingos (IP54 nos fones e IPX2 no estojo), viva voz, recarga rápida de 10 minutos para 2 horas, tecnologia Smart Ambient, acesso ao aplicativo JBL Headphones e um design em formato stick aberto. A combinação perfeita de áudio excepcional e recursos avançados em um pacote sem fio.",
    valor: "de R$ 3.000,00",
    promocao: 2199.90,
    imagem: "../img/jbl/produto_09.png", 
    categoria: "JBL",
    home: false
},

{
    id: 10, 
    nome: "",
    imagem: "../img/index/iphone.png", 
    categoria: "iPhone",
    home: true
},
{
    id: 11, 
    nome: "",
    imagem: "../img/index/apple.png", 
    categoria: "Apple",
    home: true
},

{
    id: 12, 
    imagem: "../img/index/jbl.png",
    nome: "",
    categoria: "JBL",
    home: true
},
]