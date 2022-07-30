# O mínimo que você precisa saber sobre serverless computing

- Apresentação realizada durante a 1ª OCCAM week, dia 29/07/22

## O que é serverless computing (computação sem servidor)

Modelo de desenvolvimento e execução de aplicativos em nuvem que permite que os desenvolvedores criem e executem código sem gerenciar servidores e sem pagar por infraestrutura de nuvem ociosa

O Serverless permite que os desenvolvedores concentrem todo o seu foco em escrever o melhor código de aplicativo de front-end e lógica de negócios que puderem. Tudo o que os desenvolvedores precisam fazer é escrever o código do aplicativo e implantá-lo em contêineres gerenciados por um provedor de serviços em nuvem

O provedor de nuvem cuida do resto, provisionando a infraestrutura de nuvem necessária para executar o código e dimensionando a infraestrutura para cima e para baixo sob demanda, conforme necessário. O provedor de nuvem também é responsável por todo o gerenciamento e manutenção de infraestrutura de rotina, como atualizações e patches do sistema operacional, gerenciamento de segurança, planejamento de capacidade, monitoramento do sistema e muito mais

com serverless, os desenvolvedores nunca pagam pela capacidade ociosa

## Tá mas existe servidor ou não existe?

Apesar do nome, definitivamente existem servidores na computação sem servidor. 'Sem servidor' descreve a experiência do desenvolvedor com esses servidores - eles são invisíveis para o desenvolvedor, que não os vê, gerencia ou interage com eles de qualquer forma.

## **Sem servidor vs. PaaS, contêineres e VMs**

- **Tempo de provisionamento** : medido em milissegundos para sem servidor, versus minutos a horas para os outros modelos.
- **Carga administrativa** : Nenhuma para serverless, em comparação com um continuum de leve a médio a pesado para PaaS, contêineres e VMs, respectivamente.
- **Manutenção** : As arquiteturas sem servidor são gerenciadas 100% pelo provedor. O mesmo vale para PaaS, mas contêineres e VMs exigem manutenção significativa, incluindo atualização/gerenciamento de sistemas operacionais, imagens de contêiner, conexões etc.
- **Escalonamento : O escalonamento** automático — incluindo o escalonamento automático para zero — é instantâneo e inerente para sem servidor. Os outros modelos oferecem dimensionamento automático, mas lento, que requer um ajuste cuidadoso das regras de dimensionamento automático e nenhum dimensionamento para zero.
- **Planejamento de capacidade** : Nenhum necessário para sem servidor. Os outros modelos requerem uma combinação de alguma escalabilidade automática e algum planejamento de capacidade.
- **Stateless** : Inerente para serverless, o que significa que a escalabilidade nunca é um problema; estado é mantido em um serviço ou recurso externo. PaaS, contêineres e VMs podem aproveitar o HTTP, manter um soquete ou conexão aberta por longos períodos e armazenar o estado na memória entre as chamadas.
- **Alta disponibilidade (HA) e [recuperação de desastres (DR)](https://www.ibm.com/cloud/learn/disaster-recovery-introduction)** : ambos são inerentes ao serverless sem esforço extra e sem custo adicional. Os outros modelos exigem custo adicional e esforço de gerenciamento. No caso de VMs e contêineres, a infraestrutura pode ser reiniciada automaticamente.
- **Utilização de recursos** : Serverless é 100% eficiente porque não existem coisas como capacidade ociosa - ela é invocada apenas mediante solicitação. Todos os outros modelos apresentam pelo menos algum grau de capacidade ociosa.
- **Granularidade e economia de faturamento** : o Serverless é medido em unidades de 100 milissegundos. PaaS, contêineres e VMs normalmente são medidos por hora ou minuto.

## **Prós e contras do serverless**

### **Prós**

Considerando todos os itens anteriores, não deve ser surpresa que a computação sem servidor ofereça vários benefícios técnicos e comerciais para desenvolvedores individuais e equipes de desenvolvimento empresarial.

**Produtividade aprimorada do desenvolvedor:** conforme observado acima, o serverless permite que as equipes de desenvolvimento se concentrem na escrita do código, não no gerenciamento da infraestrutura. Ele dá aos desenvolvedores muito mais tempo para inovar e otimizar a funcionalidade do aplicativo de front-end e a lógica de negócios.

**Pagar apenas pela execução** : O medidor inicia quando a solicitação é feita e termina quando a execução termina. Compare isso com o modelo de computação de [infraestrutura como serviço (IaaS)](https://www.ibm.com/cloud/learn/iaas) , em que os clientes pagam pelos servidores físicos, máquinas virtuais (VMs) e outros recursos necessários para executar aplicativos, desde o momento em que provisionam esses recursos até o momento em que são explicitamente desativados.

**Desenvolva em qualquer linguagem:** Serverless é um ambiente poliglota, permitindo que os desenvolvedores codifiquem em qualquer linguagem ou estrutura — [Java](https://www.ibm.com/cloud/learn/java-explained) , Python, JavaScript, node.js — com a qual estejam confortáveis.

**Ciclos de desenvolvimento/DevOps simplificados.** Serverless simplifica a implantação e, em um sentido mais amplo, simplifica o [DevOps](https://www.ibm.com/cloud/learn/devops-a-complete-guide) porque os desenvolvedores não gastam tempo definindo a infraestrutura necessária para integrar, testar, entregar e implantar compilações de código na produção.

**Desempenho econômico.** Para determinadas cargas de trabalho — processamento paralelo embaraçoso, processamento de fluxo, certas tarefas de processamento de dados — a computação sem servidor pode ser mais rápida e mais econômica do que outras formas de computação.

**Visibilidade de uso.** As plataformas sem servidor fornecem visibilidade quase total dos tempos do sistema e do usuário e podem agregar informações de uso sistematicamente.

Profissionais de desenvolvimento e TI citam outros benefícios específicos da computação sem servidor. Você pode explorá-los usando a ferramenta interativa abaixo:

### **Contras**

Com tanto para gostar do serverless, as organizações o estão usando para uma ampla variedade de aplicativos (veja a Figura 2 abaixo). Mas há desvantagens – algumas das quais estão relacionadas a aplicações específicas e outras que são universais.

**Latência inaceitável para determinados aplicativos** : como as arquiteturas sem servidor renunciam aos processos contínuos em favor da escalabilidade vertical para zero, às vezes elas também precisam inicializar do zero para atender a uma nova solicitação. Para muitas aplicações, o atraso resultante não seria prejudicial ou mesmo perceptível para os usuários. Mas para outros – digamos, um aplicativo de negociação financeira – essa latência de inicialização a frio pode ser inaceitável.

**Custos mais altos para cargas de trabalho estáveis ou previsíveis:** como o serverless pode ser dimensionado para cima e para baixo sob demanda em resposta à carga de trabalho, ele oferece economias de custo significativas para cargas de trabalho com picos. Mas não oferece a mesma economia para cargas de trabalho caracterizadas por processos previsíveis, estáveis ou de longa duração; nesses casos, um ambiente de servidor tradicional pode ser mais simples e econômico.

**Problemas de monitoramento e depuração:** essas tarefas operacionais são desafiadoras em qualquer sistema distribuído, mas a arquitetura sem servidor (ou arquitetura de microsserviços, ou uma combinação das duas) só agrava a complexidade. Por exemplo, as equipes podem achar difícil ou impossível monitorar ou depurar funções sem servidor usando ferramentas ou processos existentes.

**Aprisionamento do fornecedor:** Conforme observado, uma das maiores vantagens do serverless é que o provedor de nuvem gerencia todos os recursos de computação. Embora isso libere um tempo considerável para os desenvolvedores se concentrarem em escrever e melhorar seu código, também significa que a migração do código para um novo provedor de nuvem pode ser um desafio. Muitas plataformas sem servidor de provedores de nuvem são projetadas para fornecer um ecossistema de serviços de nuvem gerenciados e não são portáteis como [máquinas virtuais (VMs)](https://www.ibm.com/cloud/learn/virtual-machines) ou [contêineres Docker](https://www.ibm.com/cloud/learn/docker) . O código do aplicativo que aciona vários serviços oferecidos pela plataforma sem servidor de um provedor de nuvem pode ter que ser parcial ou completamente reescrito para obter os mesmos resultados na plataforma de outro provedor.

### O modelo Serverless evoluiu em vários estágios, do monolítico aos microsserviços, passando pela arquitetura serverless ou Function-as-a-Service (FaaS).

- **A arquitetura monolítica** é uma abordagem unificada tradicional para o desenvolvimento de software. É um modelo fortemente acoplado onde cada componente e seus subcomponentes compilam ou executam código. Se um serviço estiver com defeito, todo o servidor de aplicativos e os serviços em execução nele podem ficar inativos.
- **A arquitetura de microsserviços** é uma coleção de serviços menores dentro de um único aplicativo grande implantado de forma independente para executar uma função específica. Ele permite a entrega rápida de aplicativos em grande escala, fornecendo aos desenvolvedores flexibilidade usando [Infraestrutura como Serviço (IaaS)](https://geekflare.com/cloud-service-models/#anchor-iaas)
    
    e Plataforma como Serviço (PaaS). No entanto, escolher entre PaaS e IaaS é um desafio neste modelo.
    
- **A arquitetura sem servidor** evoluiu com a computação em nuvem e oferece mais escalabilidade e agilidade nos negócios. Em vez de IaaS e PaaS, ele utiliza FaaS e Backend-as-a-Service (BaaS). Aqui, os aplicativos são implantados conforme necessário, juntamente com os recursos para isso. Você não precisa gerenciar o servidor e pode parar de pagar se a execução do código terminar.
- **Arquitetura de nano serviços**

## Casos de uso

## Arquitetura Serverless

- Orientado a eventos / triggers
- Código não gerenciado pela gente
- Agnóstico a tecnologia
- Pague somente pelo que usar
- +Fácil de desenvolver ee +Mais tempo para pensa

# Referências

[https://www.ibm.com/cloud/learn/serverless](https://www.ibm.com/cloud/learn/serverless)

[https://geekflare.com/know-about-serverless/](https://geekflare.com/know-about-serverless/)

[https://www.icloud.com/keynote/0ZRqrzw4-ayMVNvDHzduGqAOg#WTF_are_Serverless_apps_%3F_-_AzureRS](https://www.icloud.com/keynote/0ZRqrzw4-ayMVNvDHzduGqAOg#WTF_are_Serverless_apps_%3F_-_AzureRS)

[https://www.icloud.com/keynote/0ySmsxHNVvkI5ERIToAZCmmNw#WTF_are_Serverless_apps_%3F_Connect()%3B](https://www.icloud.com/keynote/0ySmsxHNVvkI5ERIToAZCmmNw#WTF_are_Serverless_apps_%3F_Connect()%3B)

[https://aws.amazon.com/serverless/](https://aws.amazon.com/serverless/)