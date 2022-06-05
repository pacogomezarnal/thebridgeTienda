const swDocument = 
{
  "openapi": "3.0.1",
  "info": {
    "title": "apiRestTienda",
    "description": "Ejemplo técnico sobre el desarrollo de una restFull con express",
    "contact": {
      "email": "paco.gomez.arnal@gmail.com"
    },
    "version": "1.0"
  },
  "tags": [
    {
      "name": "articles",
      "description": "Artículos"
    },
    {
      "name": "providers",
      "description": "Proveedores"
    }
  ],
  "paths": {
    "/article": {
      "get": {
        "tags":[
          "articles"
        ],
        "summary": "Todas los artículos",
        "description": "Devuelve todos los artículos existentes",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Articles"
                }
              }
            }
          },
          "400": {
            "description": "Error en consulta",
            "content": {}
          }
        }
      },
    },
    "/article/{id}": {
      "get": {
        "tags":[
          "articles"
        ],
        "summary": "Encuentra un artículo",
        "description": "Busca y devuelve un artículo con el id como parámetro",
        "parameters":[
        {
          "name": "id",
          "description": "id del artículo",
          "in": "path",
          "required": true,
          "schema":{
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Article"
                }
              }
            }
          },
          "500": {
            "description": "Problem returning tasks",
            "content": {}
          },
        }
      }
    }, 
    "/provider": {
      "get": {
        "tags":[
          "providers"
        ],
        "summary": "Todos los proveedores",
        "description": "Devuelve todos los proveedores existentes",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Providers"
                }
              }
            }
          },
          "400": {
            "description": "Error en consulta",
            "content": {}
          }
        }
      },
    }, 
    "/provider/{id}": {
      "get": {
        "tags":[
          "providers"
        ],
        "summary": "Encuentra un proveedor",
        "description": "Busca y devuelve un proveedor con el id como parámetro",
        "parameters":[
        {
          "name": "id",
          "description": "id del proveedor",
          "in": "path",
          "required": true,
          "schema":{
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Provider"
                }
              }
            }
          },
          "500": {
            "description": "Problem returning tasks",
            "content": {}
          },
        }
      }
    }  
  },
  "components": {
    "schemas": {
      "Articles": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/Article"
        }
      },
      "Providers": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/Provider"
        }
      },
      "Article": {
        "type": "object",
        "properties": {
          "idarticle": {
            "type": "integer"
          },
          "nombre": {
            "type": "string"
          },
          "relevancia": {
            "type": "integer"
          },
          "precio": {
            "type": "integer",
          },
          "provider": {
            "type": "object",
            "$ref": "#/components/schemas/Provider"
          }
        }
      },
      "Provider": {
        "type": "object",
        "properties": {
          "idprovider": {
            "type": "integer"
          },
          "nombre": {
            "type": "string"
          },
          "cif": {
            "type": "string"
          },
          "direccion": {
            "type": "string",
          }
        }
      }
    },
  }
}

export default swDocument;