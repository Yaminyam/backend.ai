import sys
import os


def check_alembic_file_for_pass(file_path):
    if not os.path.isfile(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, "r") as file:
        lines = file.readlines()

    upgrade_has_pass = False
    downgrade_has_pass = False
    in_upgrade = False
    in_downgrade = False

    for line in lines:
        if "def upgrade" in line:
            in_upgrade = True
            continue
        if "def downgrade" in line:
            in_upgrade = False
            in_downgrade = True
            continue
        if in_upgrade and "pass" in line:
            upgrade_has_pass = True
        if in_downgrade and "pass" in line:
            downgrade_has_pass = True

    print(f"Upgrade function {"contains" if upgrade_has_pass else "does not contain"} 'pass'.")
    print(f"Downgrade function {"contains" if downgrade_has_pass else "does not contain"} 'pass'.")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python check_alembic_file_for_pass.py <path_to_alembic_file>")
    else:
        check_alembic_file_for_pass(sys.argv[1])
