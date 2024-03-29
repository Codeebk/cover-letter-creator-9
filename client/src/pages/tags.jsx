import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from './node_modules/layouts';
import { Header, TagsBlock } from './node_modules/components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Header title="Tags Page">Gatsby Tutorial Starter</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
