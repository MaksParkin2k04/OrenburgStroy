namespace OrenburgStroy.Model {

    public interface IRepository {
        /// <summary>
        /// Возвращает коллекцию городов
        /// </summary>
        /// <returns>Коллекция городов</returns>
        Task<IEnumerable<City>?> GetCities();

        /// <summary>
        /// Возвращает город с указанным алиасом
        /// </summary>
        /// <param name="aliasCity">Алиас города</param>
        /// <returns>Город с указанным алиасом</returns>
        Task<City?> GetCity(string aliasCity);
    }
}
