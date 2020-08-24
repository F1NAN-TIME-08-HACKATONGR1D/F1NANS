# F1NANS
Projeto Hackaton GR1D

AQUI VOCÊ PODE ENCONTRAR TODOS OS CÓDIGOS EM PYTHON USADOS PARA CRIAR, TREINAR E MELHORAR A IA DE CLASSIFICAÇÃO DO PERFIL DE CONSUMIDORES DE PRODUTOS/SERVIÇOS DO MERCADO FINANCEIRO. #O banco de dados usado foi simulado contemplado as API da GR1D e parceiros que mostram dados do Perfil do Usuário, Transações, acesso à dados do openbanking, segurança, oferta de serviços, entre outros. # Os dados estão distriburi da seguinte forma:

PERFIS DE CONCESSÃO DE CRÉDITO 

PERFIL 1 - inadimplente

• Indicador de Endividamento:
- acima de 70%
• Indicador de Poupança:
- abaixo de 10%
• Indicador de Liquidez:
- acima de 80%
• Indicador de Cobertura:
- 1 mês ou menos
• Indicador de Riqueza:
- menor que 0,3
• Score:
- abaixo de 500
• Faixa Salarial:
- até 2 salários mínimos 
• Tempo de Empresa:
- até 1 ano

PERFIL 2 - regular

• Indicador de Endividamento:
- entre 20% a 70%
• Indicador de Poupança:
- entre 10% a 20%
• Indicador de Liquidez:
- entre 60% a 80% 
• Indicador de Cobertura:
- 1 mês a 6 meses
• Indicador de Riqueza:
- entre 0,3 a 0,5
• Score:
- entre 500 a 700
• Faixa Salarial:
- entre 2 a 5 salários mínimos 
• Tempo de Empresa:
- entre 1 a 3 anos

PERFIL 3 - bom pagador

• Indicador de Endividamento:
- até 20% 
• Indicador de Poupança:
-  20% ou mais
• Indicador de Liquidez:
- até 60% 
• Indicador de Cobertura:
- 6 meses ou mais 
• Indicador de Riqueza:
- entre 0,5 e 1
• Score:
- entre 700 a 1000
• Faixa Salarial:
- entre 6 ou mais salários mínimos 
• Tempo de Empresa:
- entre 3 anos ou mais

As especificações foram levantadas por nosso especialista em mercado financeiro e serviram como entrada em nosso modelo(Algorítmo Deeplearning). A saída da IA foram os repectivos perfis (Perfil 1, Perfil 2 e Perfil 3). # Os resultados obtidos com essa base de dados, embora de 100%, são simulações, que tem por objetivo demonstrar o MVP de nossa solução # Parâmetros para a execução do algorítmo foram escolhidos com base em estudos já realizados na área. #Quando esta rede for efetivamente utilizada comercialmente, faremos novos treinamentos com mais parâmetros para aumentar a eficácia e acertividade na predição do Perfil dos Consumidores.

