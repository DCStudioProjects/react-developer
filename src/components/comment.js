import React from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

const Comment = () => {
    let disqusConfig = {
        url: `${config.siteUrl+location.pathname}`,
        identifier: post.id,
        title: post.title,
      }
      return (
        <>
          <h1>{post.title}</h1>
          <CommentCount config={disqusConfig} placeholder={'...'} />
          /* Post Contents */
          <Disqus config={disqusConfig} />
        </>
      )
    }
    
export default Comment