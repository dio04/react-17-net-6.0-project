using MoviesAPI.DTOs;
using System.Linq;

namespace MoviesAPI.Helpers
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> queryable, PaginationDTO paginationDTO)
        {
            return queryable
                .Skip((paginationDTO.Page - 1) * paginationDTO.RecordsPerPage)
                .Take(paginationDTO.RecordsPerPage);
            //skip na lejon ti injorojme disa records dhe na jep rezultate ne grumbuj
            //take na lejon te marrim vetem nje shume x te rekordeve nga tabela
        }
    }
}
