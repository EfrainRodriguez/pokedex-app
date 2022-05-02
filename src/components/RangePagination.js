import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import {
  Box,
  Pagination,
  Select,
  MenuItem,
  Typography,
  FormControl
} from '@mui/material';

const RangePagination = ({
  count = 1,
  pageSize = 20,
  page = 1,
  onChangePage,
  onChangeItemsPerPage
}) => {
  const handleChange = (event, value) =>
    onChangePage && onChangePage(event, value);
  const handleChangeItemsPerPage = (e) =>
    onChangeItemsPerPage && onChangeItemsPerPage(e);
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      my={4}
      position="relative"
    >
      <Pagination
        size="small"
        siblingCount={1}
        boundaryCount={2}
        page={page}
        count={Math.ceil(count / pageSize)}
        sx={{ marginTop: { xs: 10, md: 0 } }}
        onChange={handleChange}
      />
      <Box display="flex" alignItems="center" position="absolute" right={0}>
        <Typography variant="body1" textAlign="center" mr={1}>
          Items per page
        </Typography>
        <FormControl>
          <Select
            value={pageSize || ''}
            size="small"
            onChange={handleChangeItemsPerPage}
          >
            {[8, 12, 20, 28].map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

RangePagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  pageSize: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeItemsPerPage: PropTypes.func
};

export default RangePagination;
