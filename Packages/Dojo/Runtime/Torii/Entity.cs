using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using dojo_bindings;

namespace Dojo.Torii
{
    // A managed type for Entity
    // Frees the underlying dojo.Entity when the object is garbage collected
    public unsafe class Entity
    {
        private readonly dojo.Entity* _entity;
        private Dictionary<string, Model> _models;
        private dojo.FieldElement _key;
        
        public Entity(dojo.Entity* entity)
        {
            _entity = entity;
            _key = _entity->key;
            _models = new Dictionary<string, Model>(_entity->models.ToArray().Select(m => new KeyValuePair<string, Model>(m.name, new Model(m))));
            
        }

        public dojo.FieldElement key => _key;
        public Dictionary<string, Model> models => _models;

        ~Entity()
        {
            // dojo.entity_free(_entity);
        }
    }
}