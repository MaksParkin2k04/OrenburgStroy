namespace OrenburgStroy.Model {

    /// <summary>
    /// Проект
    /// </summary>
    public class Project {

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="id">Идентификатор</param>
        /// <param name="alias">Алиас</param>
        /// <param name="name">Название проекта</param>
        /// <param name="description">Описание проекта</param>
        protected Project(Guid id, string alias, string name, string description) {
            this.Id = id;
            this.Alias = alias;
            this.Name = name;
            this.Description = description;
            this.images = new List<ImageProject>();
        }

        private List<ImageProject> images;

        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get; private set; }

        /// <summary>
        /// Алиас
        /// </summary>
        public string Alias { get; private set; }

        /// <summary>
        /// Название проекта
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// Описание проекта
        /// </summary>
        public string Description { get; private set; }

        /// <summary>
        /// Коллекция изображений проекта
        /// </summary>
        public IReadOnlyCollection<ImageProject> Images { get { return images; } }

        /// <summary>
        /// Создает объект типа Project
        /// </summary>
        /// <param name="alias">Алиас</param>
        /// <param name="name">Название проекта</param>
        /// <param name="description">Описание проекта</param>
        /// <param name="images">Изображения проекта</param>
        /// <returns>Объект типа Project</returns>
        public static Project Create(string alias, string name, string description, IEnumerable<ImageProject> images) {
            Project project = new Project(Guid.Empty, alias, name, description);
            project.images.AddRange(images);
            return project;
        }
    }
}
