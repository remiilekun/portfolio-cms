const formatResponseData = (response) => {
  const formattedData = response.data.map(({ id, attributes }) => ({
    id,
    ...attributes,
  }));
  return { data: formattedData, meta: response.meta };
};

module.exports = { formatResponseData };
