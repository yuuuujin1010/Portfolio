import './App.css'

// 이곳의 문구를 바꾸면 내 소개가 바뀝니다.
const profile = {
  name: '유진',
  introduction: '작은 호기심을 새로운 경험으로 만듭니다.',
  description: '배우고, 만들고, 조금씩 나아가는 과정을 기록합니다. 저의 첫 번째 포트폴리오에 오신 것을 환영합니다.',
  github: 'https://github.com/yuuuujin1010',
}

const currentYear = new Date().getFullYear()

function App() {
  return (
    <>
      <a className="skip" href="#main">본문으로 바로가기</a>
      <header className="header">
        <a className="wordmark" href="#">{profile.name}<span> 스튜디오</span><b>✳</b></a>
        <nav aria-label="주요 메뉴"><a href="#about">소개</a><a href="#projects">작업</a><a href="#contact">연락</a></nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> MY LITTLE CORNER OF THE INTERNET</p>
            <h1>안녕하세요.<br />저는 <span>{profile.name}</span>입니다<span className="period">.</span></h1>
            <p className="lead">{profile.introduction}</p>
            <p className="description">{profile.description}</p>
            <a className="button" href="#projects">나의 작업 둘러보기 <span>↗</span></a>
          </div>
          <div className="art" role="img" aria-label="초록색 추상 꽃과 작은 별이 그려진 시작을 응원하는 그림">
            <span className="art-label">A WORK IN PROGRESS</span>
            <div className="flower"><i /><i /><i /><i /><i /><i /><i /><i /><div className="flower-center">:)</div></div>
            <span className="sparkle">✦</span><span className="art-note">조금씩, 나답게.</span>
            <span className="art-number">01 / IN BLOOM</span>
          </div>
        </section>
        <section id="about" className="about section">
          <p className="eyebrow">01 — ABOUT ME</p>
          <div><h2>아직은 시작,<br />가능성은 무한히.</h2><p>처음 해보는 일에도 호기심을 가지고 도전합니다. 작은 아이디어를 직접 만들고, 그 과정에서 배운 것들을 차곡차곡 쌓아가고 싶어요.</p><div className="tags"><span>호기심</span><span>꾸준한 배움</span><span>새로운 도전</span></div></div>
        </section>
        <section id="projects" className="section projects">
          <div className="section-heading"><div><p className="eyebrow">02 — SELECTED WORK</p><h2>만들어가는 이야기</h2></div><span className="small-note">작은 시작도 소중한 작업이니까요.</span></div>
          <div className="project-grid">
            <a className="project" href="https://github.com/yuuuujin1010/portfolio" target="_blank" rel="noreferrer"><div className="project-art first"><span>hello,<br /><em>world.</em></span><b>↗</b></div><div className="project-meta"><h3>나의 첫 포트폴리오</h3><span>2026</span></div><p>나를 소개하는 첫 번째 웹사이트</p><div className="tags"><span>React</span><span>TypeScript</span></div></a>
            <article className="project"><div className="project-art next"><span className="plus">＋</span><span>다음 아이디어가 자라는 중</span></div><div className="project-meta"><h3>다음 프로젝트</h3><span>준비 중</span></div><p>새롭게 배우고 만든 작업이 이곳에 채워집니다.</p></article>
          </div>
        </section>
        <section id="contact" className="contact"><p className="eyebrow">03 — SAY HELLO</p><h2>다음 이야기가 궁금하다면.</h2><p>새로운 배움과 연결을 기다립니다.</p><a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub에서 만나기 <span>↗</span></a></section>
      </main>
      <footer><span>© {currentYear} {profile.name}</span><span>조금씩, 나답게 만들어갑니다. ✳</span><a href="#">맨 위로 ↑</a></footer>
    </>
  )
}

export default App
