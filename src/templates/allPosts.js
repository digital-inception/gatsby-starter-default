// import React from 'react'
// import { graphql } from 'gatsby'
// import { 
//     Container, 
//     PostPreview, 
//     PostContentCard, 
//     featuredImage, 
//     Pagination,  
//     FeaturedImage
// } from '../components'
// import { H1, P } from '../elements'


// const allPosts = ({pageContext, data}) => {
//     const {currentPage, numPages} = pageContext
//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
//     const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
//     const nextPage = `/${currentPage + 1}`

//     const post = data.allMdx.edges

//     return (
//         <Container>
//             <FeaturedImage />
//             <PostPreview>
//                 <H1 textAlign="center" margin="0 0 16px 0">
//                 Lorem ipsum dolor sit amet.
//                 </H1>
//                 <P>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ante tellus. Nullam convallis hendrerit leo sed mattis. 
//                     Suspendisse potenti. Sed quis ligula nisl. Quisque efficitur lacinia iaculis. Pellentesque a nulla vel lorem blandit molestie. 
//                     Mauris enim mauris, sagittis porttitor bibendum eu, laoreet eget est. 
//                     Maecenas placerat neque sed velit convallis mattis. 
//                 </P>
//                 {post.map(post => (
//                     <PostContentCard 
//                     key={post.node.frontmatter.slug}
//                     date={post.node.frontmatter.date}
//                     title={post.node.frontmatter.title}
//                     excerpt={post.node.frontmatter.excerpt}
//                     slug={post.node.frontmatter.slug}
//                     />

//                 ))}
//             </PostPreview>
//             <Pagination 
//                 isFirst={isFirst}
//                 isLast={isLast}
//                 nextPage={nextPage}
//                 prevPage={prevPage}                    
//             />
//         </Container>
//     )
// } 

// export default allPosts

// export const pageQuery = graphql`
//     query AllPostQuery($skip: Int!, $limit: Int!) {
//         allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                   title
//                   date
//                   excerpt
//                 }
//               }
//             }
//           }
//     }
// `