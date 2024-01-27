import styles from './VideoReview.module.scss'


export const VideoReview = () => {
  return (
    <Wrapper>
      <section>
        <HTag variant='h1' style={{marginTop: 90, textAlign: 'center'}}>Отзывы от учеников</HTag>
        <section className={styles.content}>
          <article style={{borderRadius:'25px', overflow: 'hidden'}}>
            <video controls style={{maxHeight: '100%', maxWidth: '100%'}}>
              <source src='reviews/review1.mp4' type="video/mp4" />
            </video>
          </article>
          <article style={{borderRadius:'25px', overflow: 'hidden'}}>
            <video controls style={{maxHeight: '100%', maxWidth: '100%'}}>
              <source src='reviews/review2.mp4' type="video/mp4" />
            </video>
          </article>
          <article style={{borderRadius:'25px', overflow: 'hidden'}}>
            <video controls style={{maxHeight: '100%', maxWidth: '100%'}}>
              <source src='reviews/review3.mp4' type="video/mp4" />
            </video>
          </article>
        </section>
      </section>
    </Wrapper>
  )
}
