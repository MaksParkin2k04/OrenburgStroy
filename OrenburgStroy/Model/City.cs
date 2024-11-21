namespace OrenburgStroy.Model {

    /// <summary>
    /// Город
    /// </summary>
    public class City {

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="id">Идентификатор</param>
        /// <param name="alias">Алиас</param>
        /// <param name="name">Название города</param>
        protected City(Guid id, string alias, string name) {
            this.Id = id;
            this.Alias = alias;
            this.Name = name;
            projects = new List<Project>();
        }

        private List<Project> projects;

        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get; private set; }

        /// <summary>
        /// Алиас
        /// </summary>
        public string Alias { get; private set; }

        /// <summary>
        /// Название города
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// Коллекция проектов
        /// </summary>
        public IReadOnlyCollection<Project> Projects { get { return projects; } }

        /// <summary>
        /// Создает объект типа City
        /// </summary>
        /// <param name="alias">Алиас</param>
        /// <param name="name">Название города</param>
        /// <param name="projects">Коллекция проектов</param>
        /// <returns>Объект типа City</returns>
        public static City Create(string alias, string name, IEnumerable<Project> projects) {
            City city = new City(Guid.Empty, alias, name);
            city.projects.AddRange(projects);
            return city;
        }
    }
}
