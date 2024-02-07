using AutoMapper;

namespace Candidate.API.DTO
{
    public static class AutoMapper<TSource, TDestination>
    {
        public static Mapper mapper = new Mapper(new MapperConfiguration(
            options => options.CreateMap<TSource, TDestination>()
            ));

        public static TDestination Map(TSource source)
        {
            return mapper.Map<TDestination>(source);
        }
        public static IEnumerable<TDestination> Map(IEnumerable<TSource> source)
        {
            return mapper.Map<IEnumerable<TDestination>>(source);
        }
    }
}
