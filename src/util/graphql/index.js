import gql from 'graphql-tag';

export const FETCH_TOOLS_QUERY = gql`
  {
    getTools {
      edges {
        __typename
        ... on Tool {
          _id
          title
          make
          model
          color
          dimensions
          weight
          description
          electricalRatings
          price
          unitOfMeasure
          quantity
          location {
            address1
            address2
            city
            country
            countryCode
            latitude
            longitude
            provinceCode
            zip
          }
          category
          userId
          url
          photo {
            _id
            path
            filename
            mimetype
          }
          createdAt
        }
        ... on ToolNotFound {
          message
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const FETCH_TOOLS_BY_ID_QUERY = gql`
  query getToolById($toolId: ID!) {
    getToolById(toolId: $toolId) {
      __typename
      ... on Tool {
        _id
        title
        make
        model
        color
        dimensions
        weight
        description
        electricalRatings
        price
        unitOfMeasure
        quantity
        location {
          address1
          address2
          city
          country
          countryCode
          latitude
          longitude
          provinceCode
          zip
        }
        category
        userId
        user {
          _id
          username
          firstName
          lastName
        }
        url
        photo {
          _id
          path
          filename
          mimetype
        }
        createdAt
      }
      ... on ToolNotFound {
        message
      }
    }
  }
`;

export const FETCH_TOOLS_BY_CATEGORY = gql`
  query getToolsByCategory($category: String) {
    getToolsByCategory(category: $category) {
      edges {
        __typename
        ... on Tool {
          _id
          title
          make
          model
          color
          dimensions
          weight
          description
          electricalRatings
          price
          unitOfMeasure
          quantity
          location {
            address1
            address2
            city
            country
            countryCode
            latitude
            longitude
            provinceCode
            zip
          }
          category
          userId
          url
          photo {
            _id
            path
            filename
            mimetype
          }
          createdAt
        }
        ... on ToolNotFound {
          message
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const ADD_TOOL_MUTATION = gql`
  mutation addTool($input: ToolInput!, $file: Upload!) {
    addTool(input: $input, file: $file) {
      _id
      title
      make
      model
      color
      dimensions
      weight
      description
      electricalRatings
      category
      photo {
        path
        filename
        mimetype
      }
      createdAt
      userId
    }
  }
`;

export const SEARCH_TOOLS_QUERY = gql`
  query searchTools($search: String) {
    searchTools(search: $search) {
      __typename
      ... on Tool {
        _id
        title
        make
        model
        color
        dimensions
        weight
        description
        electricalRatings
        category
        userId
      }
      ... on ToolNotFound {
        message
      }
    }
  }
`;
