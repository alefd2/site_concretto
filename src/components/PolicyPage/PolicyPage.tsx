import styled from "styled-components";
import Banner from "@/components/Banner";

export const PolicyPage = () => {
  return (
    <WrapperPageStyled>
      <Banner
        style={{ height: "400px" }}
        srcImage="assets/banner/policy/bannerbr.png"
        hasRemmoveButton
        isCenter={true}
        title="Política de privacidade"
      />
      <div className="wrapper_text">
        <h1>Política Privacidade</h1>
        <p>
          A sua privacidade é importante para nós. É política da Concretto
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site Concretto Tech, e outros sites que possuímos
          e operamos.
          <br />
          <br />
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
          <br />
          <br />
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, os protegemos
          dentro de meios comercialmente aceitáveis ​​para evitar perdas e
          roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
          <br />
          <br />
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
          <br />
          <br />O nosso site pode ter links para sites externos que não são
          operados por nós. Esteja ciente de que não temos controle sobre o
          conteúdo e práticas desses sites e não podemos aceitar
          responsabilidade por suas respectivas políticas de privacidade.
          <br />
          <br />
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
          <br />
          <br />O uso continuado de nosso site será considerado como aceitação
          de nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contato conosco.
        </p>

        <h1>Política de Cookies Concretto Tech</h1>

        <article>
          <h2>O que são cookies?</h2>
          <p>
            {`
                    Como é prática comum em quase todos os sites profissionais, este site
                    usa cookies, que são pequenos arquivos baixados no seu computador,
                    para melhorar sua experiência. Esta página descreve quais informações
                    eles coletam, como as usamos e por que às vezes precisamos armazenar
                    esses cookies. Também compartilharemos como você pode impedir que
                    esses cookies sejam armazenados, no entanto, isso pode fazer o
                    downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                    `}
          </p>

          <h2>Como usamos os cookies?</h2>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo.
            Infelizmente, na maioria dos casos, não existem opções padrão do
            setor para desativar os cookies sem desativar completamente a
            funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se
            precisa ou não deles, caso sejam usados ​​para fornecer um serviço
            que você usa.
          </p>

          <h2>Desativar cookies</h2>
          <p>
            Você pode impedir a configuração de cookies ajustando as
            configurações do seu navegador (consulte a Ajuda do navegador para
            saber como fazer isso). Esteja ciente de que a desativação de
            cookies afetará a funcionalidade deste e de muitos outros sites que
            você visita. A desativação de cookies geralmente resultará na
            desativação de determinadas funcionalidades e recursos deste site.
            Portanto, é recomendável que você não desative os cookies.
          </p>

          <h2>Cookies que definimos</h2>
          <ul>
            <li>Cookies relacionados à conta</li>
            <li>
              Se você criar uma conta conosco, usaremos cookies para o
              gerenciamento do processo de inscrição e administração geral.
              Esses cookies geralmente serão excluídos quando você sair do
              sistema, porém, em alguns casos, eles poderão permanecer
              posteriormente para lembrar as preferências do seu site ao sair.
            </li>
            <li>
              Cookies relacionados ao login: utilizamos cookies quando você está
              logado, para que possamos lembrar dessa ação. Isso evita que você
              precise fazer login sempre que visitar uma nova página. Esses
              cookies são normalmente removidos ou limpos quando você efetua
              logout para garantir que você possa acessar apenas a recursos e
              áreas restritas ao efetuar login.
            </li>
            <li>
              Cookies relacionados a boletins por e-mail: este site oferece
              serviços de assinatura de boletim informativo ou e-mail e os
              cookies podem ser usados ​​para lembrar se você já está registrado
              e se deve mostrar determinadas notificações válidas apenas para
              usuários inscritos / não inscritos.
            </li>
            <li>
              Pedidos processando cookies relacionados: este site oferece
              facilidades de comércio eletrônico ou pagamento e alguns cookies
              são essenciais para garantir que seu pedido seja lembrado entre as
              páginas, para que possamos processá-lo adequadamente.
            </li>
            <li>
              Cookies relacionados a pesquisas: periodicamente, oferecemos
              pesquisas e questionários para fornecer informações interessantes,
              ferramentas úteis ou para entender nossa base de usuários com mais
              precisão. Essas pesquisas podem usar cookies para lembrar quem já
              participou numa pesquisa ou para fornecer resultados precisos após
              a alteração das páginas.
            </li>

            <li>
              Cookies relacionados a formulários: quando você envia dados por
              meio de um formulário como os encontrados nas páginas de contato
              ou nos formulários de comentários, os cookies podem ser
              configurados para lembrar os detalhes do usuário para
              correspondência futura.
            </li>
            <li>
              Cookies de preferências do site: para proporcionar uma ótima
              experiência neste site, fornecemos a funcionalidade para definir
              suas preferências de como esse site é executado quando você o usa.
              Para lembrar suas preferências, precisamos definir cookies para
              que essas informações possam ser chamadas sempre que você
              interagir com uma página for afetada por suas preferências.
            </li>
          </ul>
          <h2>O que são cookies?</h2>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>

          <br />
          <br />
          <br />
          <br />

          <p>
            Esta política é efetiva a partir de<strong>Setembro/2020.</strong>
          </p>
        </article>
      </div>
    </WrapperPageStyled>
  );
};

export const WrapperPageStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  margin: 40px 0;

  .wrapper_text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

    h1 {
      font-size: 20px;
      font-weight: 800;
      color: #000;
      margin: 20px 0;
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #000;
      margin: 20px 0;
    }

    p {
      color: #000;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    ul {
      padding-left: 40px;
    }

    ul > li {
      color: #000;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;
