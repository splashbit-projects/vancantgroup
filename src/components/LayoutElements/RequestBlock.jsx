import React from 'react';
import Link from 'next/link';

function RequestBlock({ title = '', subtitle = '', buttonText = '', buttonLink = ''}) {
  return (
    <section className="request-block">
      <div className="request-block__container _container">
        <div className="request-block__body">
            <div className="request-block__content">
                <h2 className="request-block__title" dangerouslySetInnerHTML={{ __html: title }}/>
                <div className="request-block__text" dangerouslySetInnerHTML={{ __html: subtitle }} />
                {buttonLink ? (
                    <Link href={buttonLink} className="request-block__link">{buttonText}</Link>
                ) : (
                    <button className="request-block__link">{buttonText}</button>
                )}
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default RequestBlock