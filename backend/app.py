from flask import Flask
from routes import soil_routes, crop_routes, disease_routes

app = Flask(__name__)

# Registering blueprints
app.register_blueprint(soil_routes.bp)
app.register_blueprint(crop_routes.bp)
app.register_blueprint(disease_routes.bp)

if __name__ == '__main__':
    app.run(debug=True)
